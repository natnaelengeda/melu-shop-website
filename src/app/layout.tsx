import type { Metadata } from "next"
import { meta } from "@/meta/metadata"

import Provider from "./provider"

// Styles
import "./globals.css"

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
