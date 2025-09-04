import React, { ReactNode } from "react"

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoginModal from "@/components/login-modal"

interface IDefaultLayout {
  children: ReactNode
}
export default function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <div
      className="w-full h-full min-h-screen">
      <Header />
      <div
        className="w-full h-full min-h-[calc(100vh-25rem)]">
        {children}
      </div>
      <LoginModal />
      <Footer />
    </div>
  )
}
