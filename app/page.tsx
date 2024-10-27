import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileText, LayoutDashboard, MessageSquare, Truck } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6 mr-2" />
          <span className="font-bold">Tchinda</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/20 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify Administrative Procedures in Cameroon
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Save time and effort with our AI-powered assistant and efficient document processing service.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/home">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>AI Assistant</CardTitle>
                  <CardDescription>Get instant information about administrative documents and procedures.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>24/7 availability</li>
                    <li>Contextual responses</li>
                    <li>10 free requests daily</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Document Processing</CardTitle>
                  <CardDescription>Efficient collection and delivery of your administrative documents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Trained drivers and couriers</li>
                    <li>Regular collection intervals</li>
                    <li>Swift delivery to administrative offices</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LayoutDashboard className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Premium Features</CardTitle>
                  <CardDescription>Enhanced services for premium users at 5000 XAF.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Unlimited AI requests</li>
                    <li>Priority document processing</li>
                    <li>Real-time notifications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For occasional users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">Free</div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>10 AI requests per day</li>
                    <li>Standard document processing</li>
                    <li>Basic notifications</li>
                  </ul>
                  <Link href="/home"><Button className="w-full">Get Started</Button></Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For frequent users</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">5000 XAF</div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Unlimited AI requests</li>
                    <li>Priority document processing</li>
                    <li>Real-time notifications</li>
                  </ul>
                  <Button className="w-full">Upgrade to Premium</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join us in simplifying administrative procedures in Cameroon. Save time, reduce stress, and get your
                  documents processed efficiently.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Tchinda Cameroon. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}