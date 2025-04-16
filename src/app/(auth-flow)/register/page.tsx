import { Metadata } from "next"
import { RegisterForm } from "@/components/register-form"

export const metadata: Metadata = {
  title: "Create an Account",
  description: "Create a new account to get started",
}

export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm">
      <RegisterForm />
    </div>
  )
} 