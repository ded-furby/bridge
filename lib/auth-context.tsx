"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"

interface AuthContextType {
  session: Session | null
  loading: boolean
  user: {
    name: string
    email: string
    image: string
  } | null
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
  user: null,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<AuthContextType["user"]>(null)

  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name || "",
        email: session.user.email || "",
        image: session.user.image || "",
      })
    } else {
      setUser(null)
    }
  }, [session])

  return (
    <AuthContext.Provider
      value={{
        session,
        loading: status === "loading",
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 