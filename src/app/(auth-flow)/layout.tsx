import { type ReactNode } from "react"

export default function AuthFlowLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  )
} 