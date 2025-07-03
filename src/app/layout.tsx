import type { Metadata } from "next"
import { meta } from "@/meta/metadata"

// Styles
import "./globals.css"

export const metadata: Metadata = meta
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
