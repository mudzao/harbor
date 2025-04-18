import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AuthErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Authentication Error</CardTitle>
          <CardDescription>
            There was a problem with your authentication attempt.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p>
            This could be due to:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>An invalid or expired link</li>
            <li>A problem with your account</li>
            <li>A temporary server issue</li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild>
              <Link href="/login">Try logging in again</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return to home page</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 