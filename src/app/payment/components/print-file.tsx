"use client"
import Image from "next/image"

// components
import { Order, Payment } from "../page"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// utils
import { dateConvertor } from "@/utils/regularDate"
import OrderItem from "./order-item"
import { addCommas } from "@/utils/add-commas"
import { orderSteps } from "./payment-data"

// app asset
import AppAsset from "@/core/AppAsset"

// Icons
import { CheckCircle, Package, CreditCard, User, Mail, Phone } from "lucide-react"

interface IPaymentData {
  order: Order;
  payment: Payment;
  contentRef: any
}

export default function PrintFile({ order, payment, contentRef }: IPaymentData) {
  const paymentDate = dateConvertor(payment.paymentDate);

  return (
    <div
      ref={contentRef}
      className="w-[30rem] mx-auto flex flex-col items-start justify-start gap-5">

      <div className="w-full h-20 bg-[#fcefe3]">
        {/* Main Content */}
        <div
          className="h-full px-5 md:px-10 mx-auto flex flex-row items-center justify-between">
          <div
            className="flex flex-row items-center justify-start gap-2 cursor-pointer">
            <Image
              src={AppAsset.Logo}
              alt="Melu Clothes Shop Logo"
              className="w-16 h-16 object-contain rounded-xl border-5 border-white"
            />
            <p className="font-cinzel text-xl text-black ">Melu Clothes Shop</p>
          </div>

        </div>
      </div>
      {/* Order ID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600">Order ID: {order.id}</p>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Left Column - Order Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Success Message */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h2 className="text-xl font-semibold text-green-800">Payment Successful!</h2>
                    <p className="text-green-700">Your order has been confirmed and is successful.</p>
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
                  <Progress
                    value={100}
                    className="h-2 bg-green-600" />
                  <div className="space-y-4">
                    {orderSteps.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${step.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : step.status === "current"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-400"
                            }`}>
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
                          <p className="text-sm text-gray-500">{paymentDate}</p>
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
                    <OrderItem
                      key={index}
                      name={item.product.name}
                      image={item.product.images[0].imageUrl}
                      quantity={item.quantity}
                      priceAtPurchase={item.priceAtPurchase} />
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>{addCommas(parseInt(payment.amount))} ETB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>0 ETB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>0 ETB</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{addCommas(parseInt(payment.amount))} ETB</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Order Details */}
          <div className="w-full space-y-6">
            {/* Payment Information */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Method</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  {
                    payment.method == 'chapa' ?
                      <Image
                        src={AppAsset.ChapaButtonLogo}
                        alt={`Chapa Image`}
                        className="rounded-md object-contain w-40 h-20 border" /> : null
                  }
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
                  <span className="text-sm">{order.guestEmail == "" ? "No Email" : order.guestEmail}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{order.guestPhone}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
