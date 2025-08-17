import React from "react"

// ShadCN
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import { Facebook, Instagram, Send } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const data = [
    {
      name: "Melu Clothes Shop",
      items: [
        { name: "About", link: "/about" },
        { name: "Collection", link: "/products" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms & Services", link: "/terms-and-services" },
      ],
    },
    {
      name: "Help & Support",
      items: [
        { name: "Orders", link: "" },
        { name: "Returns & Refunds", link: "/contact#faq" },
        { name: "FAQs", link: "/contact#faq" },
        { name: "Contact Us", link: "/contact" },
      ],
    },
    {
      name: "Join Up",
      items: [
        // { name: "Carrers", link: "" },
        { name: "Visit Us", link: "/contact#visit-us" },
      ],
    },
  ]
  return (
    <footer
      className="bg-[#404040] w-full h-full md:h-80 font-montserrat">
      <div className="grid w-full h-full grid-cols-1 md:grid-cols-6 gap-5 px-5 pt-10 mx-auto text-white xl:container ">
        {/* First Grid */}
        <div className="flex flex-col items-start justify-between w-full h-full col-span-3 gap-5 md:gap-2 pb-10 order-2 md:order-1">
          {/* Top */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">
                Join Us, Get Email About New Producs when They Arrive
              </h1>
              <Input className="w-full md:w-96" placeholder="Enter Your Email Address" />
            </div>
            <div className="flex flex-row items-start justify-start gap-2 w-full md:w-96">
              <Checkbox className="mt-1" />
              <p className="text-xs">
                By Submitting your email, you agree to receive advertising
                emails from Melu Clothes Shop
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="flex gap-2">
              <Instagram
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.instagram.com/melu_cloth_shop_/?hl=en");
                }} />
              <Facebook
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://web.facebook.com/profile.php?id=61579761473221");
                }}
              />
              <Send
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://t.me/melu_clothes_shop");
                }}
              />
            </div>
            <div>
              <p className="text-xs text-white">
                © 2025 Melu Clothes Shop. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Second Grid */}
        <div
          className="grid w-full h-full grid-cols-2 md:grid-cols-3 col-span-3 gap-3 space-y-4 md:space-y-0 order-1 md:order-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start justify-start w-full h-full gap-3">
                <h1 className="text-lg font-bold">{item.name}</h1>
                <ul className="flex flex-col items-start justify-start w-full gap-1">
                  {item.items.map((list, index) => {
                    return (
                      <Link
                        key={index}
                        href={list.link}
                        className="font-light">
                        {list.name}
                      </Link>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
