import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TchindaAIChat from "./_components/tchinda-ai-chat"

export default function TchindaAIPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tchinda AI Assistant</h1>
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Chat with Tchinda AI</CardTitle>
          <CardDescription>Get information about administrative procedures and documents in Cameroon</CardDescription>
        </CardHeader>
        <CardContent>
          <TchindaAIChat />
        </CardContent>
      </Card>
    </div>
  )
}