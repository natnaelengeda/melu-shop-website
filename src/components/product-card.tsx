import React from 'react'
import Image from 'next/image'
import { Typography } from './ui/typography'

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <button
      className="bg-gray-300 w-full h-72 relative rounded-lg overflow-hidden flex flex-col items-start justify-between gap-2 cursor-pointer">
      <Image
        className='w-full h-full absolute object-cover'
        src={image}
        alt={name}
        width={300}
        height={300} />
      <div className='w-full h-full flex flex-col items-start justify-between px-3 py-3'>
        <Typography
          className='relative font-playFair'>
          {name}
        </Typography>
        <Typography
          className='relative font-playFair'>
          {price} ETB
        </Typography>
      </div>
    </button>
  )
}