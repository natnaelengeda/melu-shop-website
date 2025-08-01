"use client"

import { useState } from "react"
import Link from "next/link"

// components
import DefaultLayout from "@/layouts/default-layout"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import ItemRow from "./components/item-row"


// state
import useCartStore from "@/store/cart"

import OrderSummary from "./components/order-summary"




export default function CartPage() {
  const { getAllItems, clear, getTotalPrice } = useCartStore();

  const cartItems = getAllItems();
  const [selectedPaymentType, setSelectedpaymentType] = useState('chapa');



  return (
    <DefaultLayout>
      <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
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
                      imageUrl={item.imageUrl} />
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

            <OrderSummary />
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}

