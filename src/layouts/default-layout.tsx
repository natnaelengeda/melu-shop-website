import React, { ReactNode } from "react"

// Components
import Header from "@/components/header"

interface IDefaultLayout {
  children: ReactNode
}
export default function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <div className="w-full h-full min-h-screen">
      <Header />
      {children}
    </div>
  )
}
