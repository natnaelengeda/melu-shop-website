"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setCurrentLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <Globe className="h-4 w-4" />
          <span className="uppercase">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>English</DropdownMenuItem>
        {/* More languages can be added here in the future */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

