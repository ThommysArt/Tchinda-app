import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Membership: Premium</p>
        </CardContent>
      </Card>
    </div>
  )
}