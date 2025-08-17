"use client";
import { useState } from 'react';

import DefaultLayout from '@/layouts/default-layout'

// components
import { Typography } from '@/components/ui/typography'
import SearchForm from './components/search-form';
import ProductCard, { ProductCardSkeleton } from '@/components/product-card';

// icons
import { Product } from '@/types/products';
import FlowerSVG from '@/components/flower-svg';

export default function Page() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <DefaultLayout>
      <div className='w-full h-full bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50'>
        {/* Top Right Flower */}
        <FlowerSVG
          className="absolute top-0 right-0 w-80 h-80 opacity-60 animate-pulse"
          position="top-right"
        />

        {/* Bottom Left Flower */}
        <FlowerSVG
          className="absolute bottom-0 left-0 w-96 h-96 opacity-40 animate-pulse"
          position="bottom-left"
        />

        <div
          className="w-full max-w-screen-xl mx-auto py-8 px-4 relative">

          {/* Title */}
          <div className="flex flex-col items-start justify-start">
            <Typography
              variant='h1'
              className="font-cinzel font-light">
              All Products
            </Typography>
          </div>

          {/* Filters */}
          <SearchForm
            isLoading={isLoading}
            setProducts={setProducts}
            setIsLoading={setIsLoading} />

          {/* Items Grid */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5">
            {
              !isLoading &&
              products &&
              products.length !== 0 &&
              products.map((product, index: number) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images}
                />
              ))}

            {
              isLoading &&
              Array.from({ length: 6 }).map((_, idx) => (
                <ProductCardSkeleton key={idx} />
              ))
            }
          </div>
        </div>
        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />
      </div>
    </DefaultLayout>
  )
}
