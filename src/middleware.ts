import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  // Update session and get response
  const res = await updateSession(request)
  const url = new URL(request.url)
  
  // Check if this is a protected route (all admin routes and chat)
  const isProtectedRoute = url.pathname.startsWith('/admin') || 
                          url.pathname.startsWith('/chat') || 
                          url.pathname === '/'
  const isAuthRoute = url.pathname.startsWith('/login') || url.pathname.startsWith('/register')
  
  // Create a supabase client to check the session
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // We don't need to set cookies during this middleware check
        },
        remove(name: string, options: CookieOptions) {
          // We don't need to remove cookies during this middleware check
        },
      },
    }
  )

  // Get user - this is more secure than getSession
  const { data: { user } } = await supabase.auth.getUser()
  
  // Redirect root to /chat
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/chat', request.url))
  }
  
  // If it's a protected route and no user, redirect to login
  if (isProtectedRoute && !user) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirect', url.pathname)
    return NextResponse.redirect(redirectUrl)
  }
  
  // If user is logged in and tries to access auth pages, redirect to chat
  if (user && isAuthRoute) {
    return NextResponse.redirect(new URL('/chat', request.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
} 