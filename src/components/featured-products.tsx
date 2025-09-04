"use client";

import React from 'react'

import { Typography } from './ui/typography'
import ProductCard, { ProductCardSkeleton } from './product-card'

// api
import { useFeaturedproducts } from '@/api/products';

// types
import { Product } from '@/types/products';

export default function Featuredproducts() {

  const { data, isPending, isError }: { data: Product[] | undefined, isPending: boolean, isError: any } = useFeaturedproducts();

  return (
    <div
      className='w-full h-auto flex flex-col items-start justify-start gap-10 centered-box pt-5'>
      {/* Title */}
      <Typography
        variant='h1'
        className='font-playFair font-light'>
        Featured Products
      </Typography>

      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5">
        {
          !isPending &&
          data &&
          data.length !== 0 &&
          data.map((product, index: number) => (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images}
            />
          ))}
        {
          !isPending &&
          (data &&
            data.length === 0)
          || isError &&
          <div
            className='w-full col-span-3 flex items-center justify-center py-4'>
            <Typography
              variant='h3'>
              Featured products will appear here once available.
            </Typography>
          </div>
        }
        {
          isPending &&
          Array.from({ length: 3 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        }
      </div>
    </div>
  )
}
