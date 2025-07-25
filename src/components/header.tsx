import React from "react"
import Image from "next/image"

// AppAsset
import AppAsset from "@/core/AppAsset"
import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"

export default function Header() {
  const headerList = [
    { name: "Categories", page: "/categories" },
    { name: "Products", page: "/products" }
  ]
  return (
    <header className="w-full h-20 bg-[#fcefe3]">
      {/* Main Content */}
      <div
        className="w-full h-full px-5 md:px-10 mx-auto xl:container flex flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center justify-start gap-2 cursor-pointer">
          <Image
            src={AppAsset.Logo}
            alt="Melu Clothes Shop Logo"
            className="w-16 h-16 object-contain rounded-xl border-5 border-white"
          />
          <p className="font-cinzel text-xl text-black ">Melu Clothes Shop</p>
        </Link>

        {/* Nav Bar */}
        <div className="w-auto h-full flex items-center justify-end gap-5">
          {
            headerList.map((header, index) => {
              return (
                <Link
                  href={header.page}
                  className="cursor-pointer text-lg hover:text-xl transition-all duration-75">
                  {header.name}
                </Link>
              )
            })
          }
        </div>

        <div className="flex flex-row items-center justify-end gap-3">
          <div
            className="hidden md:block ml-5">
            <LanguageSwitcher />
          </div>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hidden md:flex relative">
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>

      </div>
    </header>
  )
}
