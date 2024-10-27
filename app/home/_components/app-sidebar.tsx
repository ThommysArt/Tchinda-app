import { Button } from "@/components/ui/button"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { FileText, Home, Settings, User, MessageSquare } from "lucide-react"
import Link from "next/link"

export const AppSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader>
            <h2 className="text-2xl font-bold">Tchinda</h2>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu className="w-full">
                        <SidebarMenuItem className="w-full">
                            <Link href="/home" className="flex items-center">
                                <Button variant="ghost" className="flex gap-2 w-full justify-start">
                                    <Home className="mr-2 h-4 w-4" />
                                    Dashboard
                                </Button>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="w-full">
                            <Link href="/home/tasks" className="flex items-center">
                                <Button variant="ghost" className="flex gap-2 w-full justify-start">
                                    <FileText className="mr-2 h-4 w-4" />
                                    Tasks
                                </Button>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="w-full">
                            <Link href="/home/ai" className="flex items-center">
                                <Button variant="ghost" className="flex gap-2 w-full justify-start">
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Tchinda AI
                                </Button>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="w-full">
                            <Link href="/home/profile" className="flex items-center">
                                <Button variant="ghost" className="flex gap-2 w-full justify-start">
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </Button>
                            </Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem className="w-full">
                            <Link href="/home/settings" className="flex items-center">
                                <Button variant="ghost" className="flex gap-2 w-full justify-start">
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </Button>
                            </Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}
