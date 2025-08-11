"use client";

import Link from 'next/link'
import Image from "next/image"

import DefaultLayout from '@/layouts/default-layout'
import { Typography } from '@/components/ui/typography'

// api
import { useGetCategoriesProducts } from '@/api/category'

// types
import { Product } from '@/types/products';

import AppAsset from '@/core/AppAsset';

interface Categories {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  products: Product[] | []
}

export default function Page() {
  const { data, isPending }: { data: Categories[] | undefined, isPending: boolean } = useGetCategoriesProducts();

  return (
    <DefaultLayout>
      <div
        className="w-full max-w-screen-xl mx-auto py-8 px-4">
        <Typography
          variant='h1'
          className="font-cinzel font-light">
          All Categories
        </Typography>

        <div className="space-y-12 pt-5">
          {
            !isPending &&
            data &&
            data.length !== 0 &&
            data.map((category, index: number) => (
              <div
                key={index}
                className="border rounded-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image
                      src={category.imageUrl || AppAsset.Logo}
                      alt={category.name}
                      fill
                      className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <Link
                      href={`/categories/${category.id}`}
                      className="text-black underline">
                      View all products
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.products.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden group">
                      <Link href={`/products/${product.id}`}>
                        <div className="aspect-square relative">
                          <Image
                            src={product.images?.[0]?.imageUrl ?? AppAsset.Logo}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="font-bold mt-1">${product.price}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {
            isPending &&
            Array.from({ length: 3 }).map((_, index: number) => {
              return <CategoryGroupSkeleton key={index} />
            })
          }
        </div>
      </div>
    </DefaultLayout>
  )
}


function CategoryGroupSkeleton() {
  return (
    <div className="border rounded-lg p-6 animate-pulse">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-200" />
        <div className="flex flex-col gap-2">
          <div className="w-32 h-6 bg-gray-200 rounded" />
          <div className="w-24 h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden group">
            <div className="aspect-square relative bg-gray-200" />
            <div className="p-4">
              <div className="w-2/3 h-5 bg-gray-200 rounded mb-2" />
              <div className="w-1/3 h-4 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}