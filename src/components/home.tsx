import React from 'react'
import Image from "next/image"
import AppAsset from "@/core/AppAsset"
import ProductCard from './product-card'
import { Typography } from './ui/typography'

export default function HomeComponent() {
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
    <div className="w-full h-full flex flex-col items-center justify-center pt-0">
      {/* Hero */}
      <div
        className="w-full h-[30rem] relative">
        <Image
          src={AppAsset.HeroImage}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <Typography
          variant='h1'
          className='text-white absolute bottom-5 right-5 font-playFair'>
          Melu Clothes Shop
        </Typography>
      </div>

      {/* Featured Products */}
      <div
        className='w-full h-auto flex flex-col items-start justify-start gap-10 centered-box pt-5'>
        {/* Title */}
        <Typography
          variant='h1'
          className='font-playFair'>
          Featured Products
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
      </div>
    </div>
  )
}
