"use client";

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// state
import useCartStore from "@/store/cart"

// AppAsset
import AppAsset from "@/core/AppAsset"
// import { LanguageSwitcher } from "./language-switcher"
import { Button } from "./ui/button"
import { LogIn, LogOut, MenuIcon, ShoppingBag, ShoppingCart } from "lucide-react"
import useUserStore from "@/store/userStore";
import { List, Package } from "lucide-react";
import LoginModal from "./login-modal";
import useLoginModalStore from "@/store/loginModalStore";

export default function Header() {
  const { open, setOpen } = useLoginModalStore();

  const headerList = [
    { name: "Categories", page: "/categories", icon: List },
    { name: "Products", page: "/products", icon: Package },
    { name: "Orders", page: "/orders", icon: ShoppingBag },
  ];

  const { getTotalItems } = useCartStore();
  const { user } = useUserStore();

  return (
    <>
      <header className="w-full h-20 bg-[#fcefe3] relative z-50 overflow-hidden">
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
            <p className="font-cinzel text-sm md:text-xl text-black ">Melu Clothes Shop</p>
          </Link>

          {/* Nav Bar */}
          <div className="w-auto h-full hidden md:flex items-center justify-end gap-5">
            {
              headerList.map((header, index) => {
                return (
                  <Link
                    key={index}
                    href={header.page}
                    className="cursor-pointer text-lg hover:text-xl transition-all duration-75">
                    {header.name}
                  </Link>
                )
              })
            }
          </div>

          <div className="flex flex-row items-center justify-end gap-3">
            {/* <div
            className="hidden md:block ml-5">
            <LanguageSwitcher />
          </div> */}

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden md:flex relative">
              <Link href="/cart">
                <ShoppingCart className="h-7 w-7" />
                <span
                  className="bg-red-500 absolute -top-2 -right-2 text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
                <span className="sr-only">Cart</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {user?.isLoggedIn ? (
                  <Image
                    src={user.photo_url ?? AppAsset.Logo}
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                    width={100}
                    height={100}
                    alt={`${user.name} Profile`}
                  />
                ) : (
                  <MenuIcon className="cursor-pointer" />
                )}
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    className="flex flex-row items-center justify-around gap-2"
                    href="/cart">
                    <ShoppingBag className="h-7 w-7" />
                    <span>Cart</span>
                  </Link>
                </DropdownMenuItem>
                {headerList.map((header, index) => (
                  <DropdownMenuItem key={index}>
                    <Link
                      href={header.page}
                      className="flex flex-row items-center gap-2 cursor-pointer">
                      <header.icon className="h-5 w-5" />
                      {header.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                {!user?.isLoggedIn ? (
                  <DropdownMenuItem
                    style={{
                      display: "none"
                    }}
                    onSelect={(e) => {
                      e.preventDefault()
                      setOpen(true);
                    }}>
                    <li
                      className="flex flex-row items-center justify-around gap-2">
                      <LogOut className="h-7 w-7" />
                      <span>Login</span>
                    </li>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    <li
                      className="flex flex-row items-center justify-around gap-2 text-red-500">
                      <LogIn className="h-7 w-7 text-red-500" />
                      <span className="text-red-500">Logout</span>
                    </li>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </header >

    </>
  )
}
