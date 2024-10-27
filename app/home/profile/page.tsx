import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { currentUser } from "@/utils/data/auth"

export default async function ProfilePage() {
  const user = await currentUser()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Name: {user!.name || "N/A"}</p>
          <p>Email: {user!.email}</p>
          <p>Membership: Premium</p>
        </CardContent>
      </Card>
    </div>
  )
}