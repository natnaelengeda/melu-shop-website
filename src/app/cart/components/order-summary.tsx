import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// components
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

// state
import useCartStore from '@/store/cart';

// utils
import AppAsset from "@/core/AppAsset"
import { addCommas } from "@/utils/add-commas"

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

export default function OrderSummary() {
  const { getTotalPrice } = useCartStore();
  const [selectedPaymentType, setSelectedpaymentType] = useState('chapa');


  const shipping = 0;
  const total = getTotalPrice();

  return (
    <div>
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            {/* <span>${subtotal.toFixed(2)}</span> */}
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `${addCommas(shipping)} ETB`}</span>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span>{addCommas(total)} ETB</span>
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
                className="rounded-r-none"
                disabled={true} />
              <Button
                disabled
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
  )
}
