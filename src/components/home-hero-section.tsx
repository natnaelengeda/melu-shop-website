import React from 'react'
import Image from "next/image"

import AppAsset from "@/core/AppAsset"
import { Typography } from './ui/typography'

export default function HomeHeroSection() {
  return (
    <div
      className="w-full h-60 md:h-[30rem] relative">
      <Image
        src={AppAsset.HeroImage}
        alt="Hero Image"
        className="w-full h-full object-cover"
        unoptimized
        priority
        fetchPriority="high"
      />

      <Typography
        variant='h1'
        className='text-white absolute bottom-5 right-5 font-playFair'>
        Melu Clothes Shop
      </Typography>
    </div>
  )
}
