import React from 'react'

import { Typography } from './ui/typography'
import ProductCard from './product-card'

import AppAsset from "@/core/AppAsset"
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: AppAsset.Placeholder,
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      image: AppAsset.Placeholder,
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      image: AppAsset.Placeholder,
    },
    {
      id: 4,
      name: "Product 4",
      price: 19.99,
      image: AppAsset.Placeholder,
    },
    {
      id: 5,
      name: "Product 4",
      price: 19.99,
      image: AppAsset.Placeholder,
    },
    {
      id: 6,
      name: "Product 4",
      price: 19.99,
      image: AppAsset.Placeholder,
    },
  ];

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
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
