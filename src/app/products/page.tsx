"use client";
import { useState } from 'react';

import DefaultLayout from '@/layouts/default-layout'

// components
import { Typography } from '@/components/ui/typography'
import SearchForm from './components/search-form';
import ProductCard, { ProductCardSkeleton } from '@/components/product-card';

// icons
import { Product } from '@/types/products';

export default function page() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <DefaultLayout>
      <div
        className="w-full max-w-screen-xl mx-auto py-8 px-4">

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
        <div className="w-full grid grid-cols-3 gap-5">
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
    </DefaultLayout>
  )
}
