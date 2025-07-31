"use client";

import React from 'react'

import { Typography } from '@/components/ui/typography';
import DefaultLayout from '@/layouts/default-layout'
import ProductCard, { ProductCardSkeleton } from '@/components/product-card';

// api
import { useGetCategoryById } from '@/api/category';
import { useGetProductsByCategoryId } from '@/api/products';

// Types
import { Category, Product } from '@/types/products';

type Props = {
  params: Promise<{ id: string }>;
};

export default function Page({ params }: Props) {
  const { id } = React.use(params);

  const { data, isPending }: { data: Category | undefined, isPending: boolean } = useGetCategoryById(+id);
  const { data: products, isPending: isProductsPending }: { data: Product[] | undefined, isPending: boolean } = useGetProductsByCategoryId(+id);

  return (
    <DefaultLayout>
      <div
        className="w-full max-w-screen-xl mx-auto py-8 px-4">
        {
          isPending ?
            <>
              <Typography
                variant='h2'
                className="font-cinzel font-light bg-gray-200 rounded animate-pulse w-1/4 h-10 mb-4"
              >
                &nbsp;
              </Typography>
            </> :
            <div className='flex flex-col items-start justify-start'>
              <Typography
                variant='h2'
                className="font-cinzel font-light">
                {data && data.name}
              </Typography>
              <span>
                <Typography>Find the perfect pair for every occasion</Typography>
              </span>
            </div>
        }
        {/* Products */}
        <div className="w-full grid grid-cols-3 gap-5 pt-10">
          {
            !isProductsPending &&
            products &&
            products.length !== 0 &&
            products.map((product, index: number) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.images}
              />
            ))}
          {
            isProductsPending &&
            Array.from({ length: 3 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))
          }
        </div>

      </div>
    </DefaultLayout>
  )
}

