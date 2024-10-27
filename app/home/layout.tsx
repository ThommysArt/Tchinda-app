import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { FileText, Home, Settings, User, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarHeader>
            <h2 className="text-2xl font-bold">Tchinda</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/home" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/home/tasks" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Tasks
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/home/ai" className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Tchinda AI
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/home/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/home/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-6">
          <SidebarTrigger asChild>
            <Button variant="outline" size="icon" className="mb-4">
              <FileText className="h-4 w-4" />
            </Button>
          </SidebarTrigger>
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}