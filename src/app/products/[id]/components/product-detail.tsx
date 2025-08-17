import React, { useState } from 'react'
import Image from 'next/image';

// components
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// types
import { Product } from '@/types/products'

// utils
import { addCommas } from '@/utils/add-commas';
import AppAsset from '@/core/AppAsset';

// icons
import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import useCartStore from '@/store/cart';
import FlowerSVG from '@/components/flower-svg';

export default function ProductDetail({ product }: { product: Product }) {
  const { addProduct, getById, removeProduct, getItemQuantity, addQuantity, removeQuantity } = useCartStore();
  const imageUrl = product.images.length !== 0 ? product.images[0].imageUrl : AppAsset.Logo;

  const [primaryImage, setPrimaryImage] = useState(imageUrl);


  const addedToCart = getById(product.id);
  const [quantity] = useState(getItemQuantity(product.id));

  return (
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

      <div className="w-full max-w-screen-xl mx-auto py-8 px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border">
              <Image
                src={primaryImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  onClick={() => {
                    setPrimaryImage(image.imageUrl)
                  }}
                  key={index} className="aspect-square relative rounded-lg overflow-hidden border cursor-pointer">
                  <Image
                    src={image.imageUrl || AppAsset.Logo}
                    alt={`${product.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-bold mt-2">{addCommas(parseInt(product.price))} ETB</p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    onClick={() => {
                      if (quantity > 1) {
                        removeQuantity(product.id)
                      }
                    }}
                    variant="outline" size="icon" className="h-10 w-10 rounded-r-none cursor-pointer">
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="h-10 px-4 flex items-center justify-center border-y">
                    <span className="w-8 text-center">{getItemQuantity(product.id)}</span>
                  </div>
                  <Button
                    onClick={() => {
                      if (addedToCart) {
                        addQuantity(product.id);
                      } else {
                        addProduct({
                          id: product.id,
                          name: product.name,
                          description: product.description,
                          price: parseInt(product.price),
                          imageUrl: imageUrl
                        });
                        addQuantity(product.id);
                      }
                    }}
                    variant="outline" size="icon" className="h-10 w-10 rounded-l-none cursor-pointer">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  if (addedToCart) {
                    removeProduct(product.id);
                  } else {
                    addProduct({
                      id: product.id,
                      name: product.name,
                      description: product.description,
                      price: parseInt(product.price),
                      imageUrl: imageUrl
                    });
                  }
                }}
                className={`flex-1 text-black cursor-pointer ${addedToCart && "bg-red-300 hover:bg-red-500"}`}>

                {
                  addedToCart ?
                    <>
                      <div className='rounded-full bg-red-500 text-white'>
                        <Minus />
                      </div>
                      Remove From Cart
                    </> :
                    <>
                      <ShoppingCart
                        className="mr-2 h-5 w-5" />
                      Add to Cart
                    </>
                }
              </Button>
              <Button
                variant="outline"
                className="flex-1 cursor-pointer">
                <Heart
                  className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <p>Free standard shipping on all orders over $50. Delivery typically takes 3-5 business days.</p>
                <p className="mt-2">Express shipping available at checkout for $12.99.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      {/* Floating animation elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />
    </div>

  )
}
