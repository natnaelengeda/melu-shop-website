import React from 'react'
import Image from "next/image"

import AppAsset from "@/core/AppAsset"
import { Typography } from './ui/typography'

export default function Categories() {

  const categories = [
    {
      name: "Tshirt",
      image: AppAsset.Placeholder
    },
    {
      name: "Kemis",
      image: AppAsset.Placeholder
    },
    {
      name: "Crop",
      image: AppAsset.Placeholder
    },
    {
      name: "Vell",
      image: AppAsset.Placeholder
    }
  ];

  return (
    <div
      className='w-full h-auto flex flex-col items-start justify-start gap-10 centered-box pt-5'>
      <Typography
        variant='h1'
        className='font-playFair font-light'>
        Categories
      </Typography>

      <div className="flex flex-row gap-5 w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full h-40 relative flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden">
            <Image
              className='w-full h-full absolute object-cover'
              src={category.image}
              alt={category.name}
              width={300}
              height={300} />
            <Typography
              variant='h3'
              className='relative'>
              {category.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
