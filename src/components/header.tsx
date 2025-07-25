import React from "react"
import Image from "next/image"

// AppAsset
import AppAsset from "@/core/AppAsset"
import Link from "next/link"

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
        <div className="flex flex-row items-center justify-start gap-2">
          <Image
            src={AppAsset.Logo}
            alt="Melu Clothes Shop Logo"
            className="w-16 h-16 object-contain rounded-xl border-5 border-white"
          />
          <p className="font-cinzel text-xl text-black ">Melu Clothes Shop</p>
        </div>

        {/* Nav Bar */}
        <div className="w-full h-full flex items-center justify-end gap-5">
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
      </div>


    </header>
  )
}
