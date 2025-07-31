"use client";
import DefaultLayout from '@/layouts/default-layout'

import Image from 'next/image'
import { Typography } from '@/components/ui/typography'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Filter, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useProducts } from '@/api/products';

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
        <div className="bg-muted p-4 rounded-lg mb-8 mt-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                className='bg-white'
                placeholder="Search marketplace..." />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Category"
                    color=''
                    style={{
                      color: 'white',

                    }} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="tops">Tops</SelectItem>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="jeans">Jeans</SelectItem>
                  <SelectItem value="shoes">Shoes</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="new">New with tags</SelectItem>
                  <SelectItem value="like-new">Like new</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under25">Under $25</SelectItem>
                  <SelectItem value="25to50">$25 to $50</SelectItem>
                  <SelectItem value="50to100">$50 to $100</SelectItem>
                  <SelectItem value="over100">Over $100</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className='bg-primary text-black border border-gray-200'>
              <Filter className="h-4 w-4" />
              <span className="">Search</span>
            </Button>
          </div>
        </div>

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
