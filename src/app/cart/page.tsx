"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import DefaultLayout from "@/layouts/default-layout"
import AppAsset from "@/core/AppAsset"

// This would normally come from a context or state management
const initialCartItems = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Graphic Print T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [selectedPaymentType, setSelectedpaymentType] = useState('chapa');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  const paymentButtons = [
    {
      src: AppAsset.ChapaButtonLogo,
      type: 'chapa',
      alt: 'Chapa Button Logo',
      className: 'w-full h-full object-cover',
      buttonClass: 'text-black p-0',
    },
    {
      src: AppAsset.SantimPayButtonLogo,
      type: 'santim',
      alt: 'Santim Pay Button Logo',
      className: 'w-full h-full object-contain',
      buttonClass: 'text-black p-0 px-2',
    },
    {
      src: AppAsset.StripePayButtonLogo,
      type: 'stripe',
      alt: 'Stripe Button Logo',
      className: 'w-full h-full',
      buttonClass: 'text-black',
    },
  ];

  return (
    <DefaultLayout>
      <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link href="/">Start Shopping</Link>
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
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 relative rounded overflow-hidden">
                            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                          </div>
                          <div>
                            <Link href={`/product/${item.id}`} className="font-medium hover:underline">
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <div className="h-8 w-10 flex items-center justify-center border-y">
                            <span className="text-sm">{item.quantity}</span>
                          </div>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex justify-between mt-6">
                <Button variant="outline" asChild>
                  <Link href="/">Continue Shopping</Link>
                </Button>
                <Button variant="outline" onClick={() => setCartItems([])}>
                  Clear Cart
                </Button>
              </div>
            </div>

            <div>
              <div className="border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="coupon" className="block text-sm font-medium mb-1">
                      Coupon Code
                    </label>
                    <div className="flex">
                      <Input
                        id="coupon"
                        placeholder="Enter coupon code"
                        className="rounded-r-none" />
                      <Button
                        className="rounded-l-none text-black">
                        Apply
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-start gap-2">
                    <label
                      htmlFor="payment-method"
                      className="block text-sm font-medium mb-1">
                      Choose Payment Method
                    </label>
                    <div
                      className="w-full flex flex-row items-center justify-start gap-4">

                      {paymentButtons.map((btn, index) => (
                        <Button
                          key={index}
                          className={`${btn.buttonClass} ${selectedPaymentType !== btn.type && 'bg-transparent border border-gray-300'}`}
                          onClick={() => setSelectedpaymentType(btn.type)}>
                          <Image
                            src={btn.src}
                            alt={btn.alt}
                            className={btn.className} />
                        </Button>
                      ))}

                    </div>
                  </div>

                  <Button
                    className="w-full text-black"
                    asChild>
                    <Link
                      href="/checkout"
                      className="text-black">
                      Proceed to Checkout
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}

