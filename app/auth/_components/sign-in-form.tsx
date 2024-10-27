"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/webauthn"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { ExclamationTriangleIcon, RocketIcon } from "@radix-ui/react-icons";
import { webAuthnSchema } from "@/utils/zod"
import { BeatLoader } from "react-spinners";
import { DEFAULT_SIGNIN_REDIRECT } from "@/utils/routes";
import { useToast } from "@/hooks/use-toast"



 
export default function PasskeySignInForm() {
  const { data: session, update, status } = useSession()
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false)

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different Provider!"
      : "";

  const form = useForm<z.infer<typeof webAuthnSchema>>({
    resolver: zodResolver(webAuthnSchema),
    defaultValues: {
      email: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof webAuthnSchema>) {
    try {
      setLoading(true)
      if (status === "authenticated") {
        signIn("passkey", { 
          action: "register", 
          email: values.email, 
          callbackUrl: callbackUrl || DEFAULT_SIGNIN_REDIRECT 
        })
        .then(()=>setSuccess("You have successfully registered with passkey."))
        .finally(()=>setLoading(false))
      } else {
        signIn("passkey", {
          email: values.email, 
          callbackUrl: callbackUrl || DEFAULT_SIGNIN_REDIRECT
        })
        .then(()=>setSuccess("You have successfully signed in with passkey."))
        .finally(()=>setLoading(false))
      }
    } catch (error) {
      const {toast} = useToast()
      toast({
        title: "Authentication Failed",
        description: "An error occured during authentication. Please try again.",
      })
    }
  }
 
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sign In to Tchinda</CardTitle>
        <CardDescription>Enter your email to sign in with a passkey</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 p-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="me@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && (
                <Alert variant="destructive">
                  <ExclamationTriangleIcon className="h-6 w-6" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert>
                  <RocketIcon className="h-6 w-6"/>
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
            <Button type="submit" disabled={loading}>
              {loading===false ? ("Continue with Passkey"):(<BeatLoader />)}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}