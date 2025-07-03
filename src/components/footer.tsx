import React from "react"

// ShadCN
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import { Facebook, Instagram, Send } from "lucide-react"

export default function Footer() {
  const data = [
    {
      name: "Melu Clothes Shop",
      items: [
        { name: "About", link: "" },
        { name: "Collection", link: "" },
        { name: "Privacy Policy", link: "" },
        { name: "Terms & Conditions", link: "" },
      ],
    },
    {
      name: "Help & Support",
      items: [
        { name: "Orders", link: "" },
        { name: "Returns & Refunds", link: "" },
        { name: "FAQs", link: "" },
        { name: "Contact Us", link: "" },
      ],
    },
    {
      name: "Join Up",
      items: [
        { name: "Carrers", link: "" },
        { name: "Visit Us", link: "" },
      ],
    },
  ]
  return (
    <footer className="bg-[#404040] w-full h-80 ">
      <div className="grid w-full h-full grid-cols-6 gap-5 px-5 pt-10 mx-auto text-white xl:container font-cinzel">
        {/* First Grid */}
        <div className="flex flex-col items-start justify-between w-full h-full col-span-3 gap-2 pb-10">
          {/* Top */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">
                Join Us, Get Email About New Producs when They Arrive
              </h1>
              <Input className="w-96" placeholder="Enter Your Email Address" />
            </div>
            <div className="flex flex-row items-start justify-start gap-2 w-96">
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
              <Instagram />
              <Facebook />
              <Send />
            </div>
            <div>
              <p className="text-xs text-white">
                © 2025 Melu Clothes Shop. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Second Grid */}
        <div className="grid w-full h-full grid-cols-3 col-span-3 gap-3">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start justify-start w-full h-full gap-3"
              >
                <h1 className="text-lg font-semibold">{item.name}</h1>
                <ul className="flex flex-col items-start justify-start w-full gap-1">
                  {item.items.map((list, index) => {
                    return <li key={index}>{list.name}</li>
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
