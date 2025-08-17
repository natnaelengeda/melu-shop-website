"use client"

import Link from "next/link"

// components
import DefaultLayout from "@/layouts/default-layout"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import ItemRow from "./components/item-row"

// state
import useCartStore from "@/store/cart"

import OrderSummary from "./components/order-summary"
import AppAsset from "@/core/AppAsset"
import FlowerSVG from "@/components/flower-svg"

export default function CartPage() {
  const { getAllItems, clear } = useCartStore();

  const cartItems = getAllItems();

  return (
    <DefaultLayout>
      <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50">
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
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
              <Button asChild>
                <Link
                  className="text-black"
                  href="/">
                  <span className="text-black">Start Shopping</span>
                </Link>
              </Button>
            </div>
          ) : (
            <div
              className="h-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">
              <div className="h-auto lg:col-span-2 ">
                <div className="flex flex-col bg-white p-5 border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Quantity</TableHead>
                        <TableHead className="text-right">Subtotal</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item, index: number) => (
                        <ItemRow
                          key={index}
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          imageUrl={item.imageUrl ?? AppAsset.Logo} />
                      ))}
                    </TableBody>
                  </Table>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" asChild>
                      <Link href="/">Continue Shopping</Link>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => clear()}>
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </div>

              <OrderSummary />
            </div>
          )}
        </div>
        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' } as React.CSSProperties} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' } as React.CSSProperties} />

      </div>
    </DefaultLayout>
  )
}

