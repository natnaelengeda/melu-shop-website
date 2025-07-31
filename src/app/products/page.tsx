"use client";

import DefaultLayout from '@/layouts/default-layout'

import Image from 'next/image'
import { Typography } from '@/components/ui/typography'
import { Button } from "@/components/ui/button"

import { Card, CardContent, CardFooter } from "@/components/ui/card"


import Link from 'next/link'

import SearchForm from './components/search-form';

// icons
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react';
import { Product } from '@/types/products';

const marketplaceItems = [
  {
    id: 101,
    name: "Vintage Denim Jacket",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=400",
    seller: "JaneDoe",
    condition: "Like new",
    category: "jackets",
  },
  {
    id: 102,
    name: "Nike Running Shoes",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    seller: "MikeSports",
    condition: "Good",
    category: "shoes",
  },
  {
    id: 103,
    name: "Summer Floral Dress",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    seller: "FashionLover",
    condition: "Like new",
    category: "dresses",
  },
  {
    id: 104,
    name: "Leather Crossbody Bag",
    price: 55.0,
    image: "/placeholder.svg?height=400&width=400",
    seller: "StyleQueen",
    condition: "Excellent",
    category: "accessories",
  },
  {
    id: 105,
    name: "Cashmere Sweater",
    price: 65.0,
    image: "/placeholder.svg?height=400&width=400",
    seller: "WinterStyle",
    condition: "Like new",
    category: "tops",
  },
  {
    id: 106,
    name: "Designer Sunglasses",
    price: 85.0,
    image: "/placeholder.svg?height=400&width=400",
    seller: "LuxuryFinds",
    condition: "Good",
    category: "accessories",
  },
  {
    id: 107,
    name: "Linen Shirt",
    price: 28.5,
    image: "/placeholder.svg?height=400&width=400",
    seller: "SummerVibes",
    condition: "Excellent",
    category: "tshirt",
  },
  {
    id: 108,
    name: "Vintage High Waist Jeans",
    price: 42.0,
    image: "/placeholder.svg?height=400&width=400",
    seller: "RetroFashion",
    condition: "Good",
    category: "jeans",
  },
]


export default function page() {
  const [products, setProducts] = useState<Product[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <DefaultLayout>
      <div
        className="w-full max-w-screen-xl mx-auto py-8 px-4"      >

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
          setProducts={setProducts}
          setIsLoading={setIsLoading} />

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {marketplaceItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group">
              <div className="relative">
                <Link href={`/marketplace/${item.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                {/* <MarketplaceItemBadge /> */}
              </div>
              <CardContent className="p-4">
                <Link href={`/marketplace/${item.id}`} className="hover:underline">
                  <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">${item.price.toFixed(2)}</span>
                  <span className="text-xs text-muted-foreground">{item.condition}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Sold by {item.seller}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </DefaultLayout>
  )
}
