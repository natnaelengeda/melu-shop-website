import Link from 'next/link'
import Image from "next/image"

import DefaultLayout from '@/layouts/default-layout'
import { Typography } from '@/components/ui/typography'

export default function page() {
  const categoryGroups = [
    {
      name: "Shoes",
      id: "shoes",
      image: "/placeholder.svg?height=300&width=300",
      products: [
        {
          id: 1,
          name: "Classic White Sneakers",
          price: 89.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 5,
          name: "Running Shoes",
          price: 119.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 9,
          name: "Leather Boots",
          price: 149.99,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      name: "T-Shirts",
      id: "tshirt",
      image: "/placeholder.svg?height=300&width=300",
      products: [
        {
          id: 2,
          name: "Graphic Print T-Shirt",
          price: 29.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 6,
          name: "Casual V-Neck T-Shirt",
          price: 19.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 10,
          name: "Striped T-Shirt",
          price: 24.99,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      name: "Women Tops",
      id: "women-tops",
      image: "/placeholder.svg?height=300&width=300",
      products: [
        {
          id: 3,
          name: "Floral Summer Top",
          price: 34.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 7,
          name: "Silk Blouse",
          price: 59.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 11,
          name: "Casual Button-Up Shirt",
          price: 44.99,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      name: "Underwear for Women",
      id: "women-underwear",
      image: "/placeholder.svg?height=300&width=300",
      products: [
        {
          id: 4,
          name: "Cotton Lace Underwear Set",
          price: 24.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 8,
          name: "Seamless Briefs (3-Pack)",
          price: 19.99,
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          id: 12,
          name: "Satin Lingerie Set",
          price: 39.99,
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
  ]

  return (
    <DefaultLayout>
      <div
        className="w-full max-w-screen-xl mx-auto py-8 px-4">
        <Typography
          variant='h1'
          className="font-cinzel font-light">
          All Categories
        </Typography>

        <div className="space-y-12">
          {categoryGroups.map((category) => (
            <div key={category.id} className="border rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                  <Link href={`/category/${category.id}`} className="text-primary hover:underline">
                    View all products
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.products.map((product) => (
                  <div key={product.id} className="border rounded-lg overflow-hidden group">
                    <Link href={`/product/${product.id}`}>
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="font-bold mt-1">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}
