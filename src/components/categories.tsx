"use client";

import React from 'react'
import Image from "next/image"

import AppAsset from "@/core/AppAsset"
import { Typography } from './ui/typography'
import { useGetCategories } from '@/api/category';
import { Category } from '@/types/products';

export default function Categories() {
  const { data, isPending }: { data: Category[] | undefined, isPending: boolean } = useGetCategories();

  return (
    <div
      className='w-full h-auto flex flex-col items-start justify-start gap-10 centered-box pt-5'>
      <Typography
        variant='h1'
        className='font-playFair font-light'>
        Categories
      </Typography>

      <div className="flex flex-row flex-wrap gap-5 w-full">
        {
          !isPending &&
          data &&
          data.length !== 0 &&
          data.map((category, index) => (
            <div
              key={index}
              className="w-66 h-40 relative flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden border border-gray-300">
              <Image
                className='w-full h-full absolute object-cover'
                src={category.imageUrl}
                alt={category.name}
                width={300}
                height={300} />
              <div className='bg-primary rounded-2xl px-2 py-2  relative'>
                <Typography
                  variant='h3'
                  className='relative'>
                  {category.name}
                </Typography>
              </div>
            </div>
          ))}

        {
          isPending &&
          Array.from({ length: 3 }).map((_, index: number) => (
            <CategoryCardSkeleton key={index} />
          ))
        }
      </div>
    </div>
  )
}

function CategoryCardSkeleton() {
  return (
    <div className="w-full h-40 relative flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-full absolute bg-gray-200" />
      <div className="w-1/2 h-6 bg-gray-200 rounded z-10" />
    </div>
  );
}