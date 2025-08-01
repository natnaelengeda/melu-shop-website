import React from 'react'
import Image from 'next/image'
import { Typography } from './ui/typography'

// Types
import { Images } from '@/types/products'
import AppAsset from '@/core/AppAsset'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: number;
  name: string
  price: string
  image: Images[] | []
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const imageUrl = image ? image.length !== 0 ? image[0]?.imageUrl : AppAsset.Logo : AppAsset.Logo;
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/products/${id}`)
      }}
      className="bg-gray-300 w-full h-72 relative rounded-lg overflow-hidden flex flex-col items-start justify-between gap-2 cursor-pointer">
      <Image
        className='w-full h-full absolute object-cover'
        src={imageUrl}
        alt={name}
        width={300}
        height={300} />
      <div
        className='w-full h-full flex flex-col items-start justify-between relative'>
        <div className='w-auto h bg-primary px-3 py-2 rounded-br-xl border-b border-r border-gray-300'>
          <Typography
            className='relative font-playFair'>
            {name}
          </Typography>
        </div>
        <div className='w-auto h bg-primary px-3 py-2 rounded-tr-xl border-t border-r border-gray-300'>
          <Typography
            className='relative font-playFair'>
            {price} ETB
          </Typography>
        </div>
      </div>
    </button>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-gray-300 w-full h-72 relative rounded-lg overflow-hidden flex flex-col items-start justify-between gap-2 animate-pulse">
      <div className="w-full h-full absolute bg-gray-300" />
      <div className="w-full h-full flex flex-col items-start justify-between px-3 py-3 z-10">
        <div className="w-2/3 h-6 bg-gray-200 rounded mb-2" />
        <div className="w-1/3 h-5 bg-gray-200 rounded" />
      </div>
    </div>
  );
}