import React from "react"
import Image from "next/image"

// AppAsset
import AppAsset from "@/core/AppAsset"

export default function Header() {
  return (
    <header className="w-full h-20 bg-[#fcefe3]">
      {/* Main Content */}
      <div className="w-full h-full px-5 md:px-10 mx-auto xl:container flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-2">
          <Image
            src={AppAsset.Logo}
            alt="Melu Clothes Shop Logo"
            className="w-16 h-16 object-contain rounded-xl border-5 border-white"
          />
          <p className="font-cinzel text-xl text-black ">Melu Clothes Shop</p>
        </div>
      </div>
    </header>
  )
}
