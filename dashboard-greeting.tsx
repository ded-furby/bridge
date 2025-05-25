"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export function DashboardGreeting() {
  const { data: session } = useSession()
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Good Morning")
    } else if (hour < 18) {
      setGreeting("Good Afternoon")
    } else {
      setGreeting("Good Evening")
    }
  }, [])

  const firstName = session?.user?.name?.split(" ")[0] || "User"

  return (
    <div className="px-4 lg:px-6 py-4">
      <h1 className="text-3xl font-bold tracking-tight">
        {greeting}, {firstName}!
      </h1>
      <p className="text-muted-foreground">
        Welcome back to your dashboard. Here's what's happening today.
      </p>
    </div>
  )
} 