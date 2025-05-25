"use client"

import * as React from "react"
import { useSession } from "next-auth/react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconMail,
  IconReport,
  IconSettings,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Arjun",
    email: "arjunavtani@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: IconChartBar,
    },
    
    {
      title: "Connect",
      url: "/connect",
      icon: IconUserPlus,
    },
    {
      title: "Discussions",
      url: "/discussions",
      icon: IconListDetails,
    },
    {
      title: "Leaderboard",
      url: "/leaderboard",
      icon: IconDashboard,
    },
    {
      title: "Mail",
      url: "/mail",
      icon: IconMail,
    },
    {
      title: "Files",
      url: "/files",
      icon: IconFolder,
    },
    {
      title: "Societies",
      url: "/societies",
      icon: IconUsers,
    },
    {
      title: "Assessments",
      url: "/assessments",
      icon: IconFileDescription,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
    title: "Get Help",
    url: "mailto:arjunavtani@gmail.com?subject=Whatever%20it%20is,%20here%20to%20help.&body=Drop%20your%20comment%20here?",
    icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "AI Tutor",
      url: "/bridgey",
      icon: IconFileAi,
      isHighlighted: true,
    },
    {
      name: "Word Counter",
      url: "/word-counter",
      icon: IconDatabase,
    },
    {
      name: "Speed Type",
      url: "/speed-type",
      icon: IconReport,
    },
    {
      name: "Referencing",
      url: "/reference-generator",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  
  // Get user data from Google auth
  const userData = {
    name: session?.user?.name || "User",
    email: session?.user?.email || "user@example.com",
    avatar: session?.user?.image || "/avatars/shadcn.jpg",
  }

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Bridge Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}
