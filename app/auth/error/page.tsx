import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type AuthErrorPageProps = {
  searchParams: { error?: string }
}

export default function AuthErrorPage({ searchParams }: AuthErrorPageProps) {
  const error = searchParams.error || 'An unknown error occurred'

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary/20 to-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Authentication Error</CardTitle>
          <CardDescription>There was a problem with your authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{error}</p>
          <Button asChild className="w-full">
            <Link href="/auth/sign-in">Try Again</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
