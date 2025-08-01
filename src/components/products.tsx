"use client";
import React from 'react'

import { Typography } from './ui/typography'
import ProductCard, { ProductCardSkeleton } from './product-card'

import { Product } from '@/types/products';

import { ArrowRight } from 'lucide-react';
import { useProducts } from '@/api/products';


export default function Products() {
  const { data, isPending }: { data: Product[] | undefined, isPending: boolean } = useProducts();


  return (
    <div
      className='w-full h-auto flex flex-col items-start justify-start gap-10 centered-box pt-5'>
      {/* Title */}
      <Typography
        variant='h1'
        className='font-playFair font-light'>
        Products
      </Typography>

      <div className="w-full grid grid-cols-3 gap-5">
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
          isPending &&
          Array.from({ length: 3 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))
        }
      </div>

      <div className='w-full flex items-center justify-end'>
        <button
          className='flex items-center justify-center gap-2 px-4 py-2 bg-primary text-center text-black text-lg rounded-lg border border-gray-200'>
          See More
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
