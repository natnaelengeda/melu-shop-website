"use client"

import Image from "next/image"
import { CheckCircle, Package, CreditCard, User, Mail, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Order, Payment } from "../page"

interface IPaymentData {
  order: Order;
  payment: Payment;
}

export default function PaymentData({ order, payment }: IPaymentData) {
  const orderSteps = [
    { id: 1, name: "Order Confirmed", status: "completed", date: "Jan 15, 2024" },
    { id: 2, name: "Payment Processed", status: "completed", date: "Jan 15, 2024" },
  ]

  return (
    <div
      className="min-h-screen bg-gray-50">

      {/* Order ID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-sm text-gray-600">Order ID: 27</p>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Order Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Success Message */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">Payment Successful!</h2>
                    <p className="text-green-700">Your order has been confirmed and is being processed.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5" />
                  <span>Order Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Progress value={100} className="h-2" />
                  <div className="space-y-4">
                    {orderSteps.map((step, index) => (
                      <div key={step.id} className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${step.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : step.status === "current"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-400"
                            }`}
                        >
                          {step.status === "completed" ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-medium">{step.id}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-medium ${step.status === "current" ? "text-blue-600" : "text-gray-900"}`}>
                            {step.name}
                          </p>
                          <p className="text-sm text-gray-500">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index: number) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      {/* <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      /> */}
                      <div className="flex-1">
                        {/* <h4 className="font-medium text-gray-900">{item.name}</h4> */}
                        <p className="text-sm text-gray-500">
                          {/* Color: {item.color} • Size: {item.size} */}
                        </p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${(item.priceAtPurchase * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$149.97</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>$9.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>$12.80</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$172.76</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Details */}
          <div className="space-y-6">
            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Method</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-600">Expires 12/26</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Contact Info</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">john.smith@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-transparent" variant="outline">
                Track Your Order
              </Button>
              <Button className="w-full bg-transparent" variant="outline">
                Download Invoice
              </Button>
              <Button className="w-full">Continue Shopping</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Join Us, Get Email About New Products when They Arrive</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400"
                />
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>By Submitting your email, you agree to receive advertising emails from Melu Clothes Shop</span>
                </label>
              </div>
              <div className="flex space-x-4 mt-6">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Melu Clothes Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help & Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Join Up</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>Melu Clothes Shop. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
