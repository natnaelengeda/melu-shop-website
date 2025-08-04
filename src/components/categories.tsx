"use client";

import React from 'react'
import Image from "next/image"
import { useRouter } from 'next/navigation';

import { Typography } from './ui/typography'
import { useGetCategories } from '@/api/category';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// types
import { Category } from '@/types/products';

export default function Categories() {
  const router = useRouter();
  const { data, isPending }: { data: Category[] | undefined, isPending: boolean } = useGetCategories();


  return (
    <div
      className='w-full h-auto flex flex-col items-start justify-start gap-10 centered-box pt-5'>
      <Typography
        variant='h1'
        className='font-playFair font-light'>
        Categories
      </Typography>

      <div
        className="hidden md:flex flex-row flex-wrap gap-5 w-full items-center justify-center">
        {
          !isPending &&
          data &&
          data.length !== 0 &&
          data.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                router.push(`/categories/${category.id}`)
              }}
              className="w-66 h-40 relative flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden border border-gray-300 cursor-pointer box-transition ">
              <Image
                className='w-full h-full absolute object-cover'
                src={category.imageUrl}
                alt={category.name}
                width={300}
                height={300} />
              <div
                className='bg-primary rounded-sm px-2 py-2  relative'>
                <Typography
                  variant='p'
                  className='relative'>
                  {category.name}
                </Typography>
              </div>
            </div>
          ))}

        {
          isPending &&
          <div className='w-full grid grid-cols-3 gap-10'>
            {
              Array.from({ length: 3 }).map((_, index: number) => (
                <CategoryCardSkeleton key={index} />
              ))
            }
          </div>
        }
      </div>

      <div
        className="flex md:hidden flex-row flex-wrap gap-5 w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.8}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
          className=''>
          {
            !isPending &&
            data &&
            data.length !== 0 &&
            data.map((category, index) => (
              <SwiperSlide
                key={index}>
                <div
                  onClick={() => {
                    router.push(`/categories/${category.id}`)
                  }}
                  className="w-full h-40 relative flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden border border-gray-300 cursor-pointer box-transition ">
                  <Image
                    className='w-full h-full absolute object-cover'
                    src={category.imageUrl}
                    alt={category.name}
                    width={300}
                    height={300} />
                  <div
                    className='bg-primary rounded-sm px-2 py-2  relative'>
                    <Typography
                      variant='p'
                      className='relative'>
                      {category.name}
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {
          isPending &&
          Array.from({ length: 1 }).map((_, index: number) => (
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