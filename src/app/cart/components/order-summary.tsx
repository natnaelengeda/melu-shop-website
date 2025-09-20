import React, { useState } from 'react'
import Image from 'next/image';

// components
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { LoginButton } from '@telegram-auth/react';

// state
import useCartStore from '@/store/cart';
import useUserStore from '@/store/userStore';

// utils
import AppAsset from "@/core/AppAsset"
import { addCommas } from "@/utils/add-commas"
import axios from "@/utils/axios";
import toast from 'react-hot-toast';
import { error } from 'console';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import useLoginModalStore from '@/store/loginModalStore';

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
    className: 'w-15 h-10 object-contain',
    buttonClass: 'text-black p-0 px-2',
  },
  {
    src: AppAsset.ArifPayButtonLogo,
    type: 'arif-pay',
    alt: 'Arif Pay Button Logo',
    className: 'w-15 h-10 object-contain',
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
  const { getTotalPrice, getAllItems } = useCartStore();
  const { user, login } = useUserStore();
  const { open, setOpen, toggleOpen } = useLoginModalStore();

  const [selectedPaymentType, setSelectedpaymentType] = useState('chapa');
  const [isOrderloading, setIsOrderLoading] = useState(false);


  const shipping = 0;
  const total = getTotalPrice();

  const addOrder = async () => {

    setIsOrderLoading(true);
    const products: { productId: number, quantity: number }[] = [];
    const items = getAllItems();
    items.map((item) => {
      products.push({ productId: item.id, quantity: item.quantity });
    })

    axios.post(`/orders`, {
      products,
      paymentMethod: selectedPaymentType,
      purchaseType: "online",
      deliveryAddressId: 0,
      isDelivery: false,
      isPickup: true,
      guestEmail: "",
      guestPhone: ""
    }).then((response) => {
      const status = response.status;
      if (status == 201) {
        const data = response.data;
        axios.post(`/payments/initiate`, {
          orderId: data.id,
          provider: selectedPaymentType
        }).then((response) => {
          const status = response.status;
          if (status == 201) {
            const paymentLink = response.data.paymentLink;
            if (paymentLink == "unavailable") {
              toast.error("Payment Unavailable at the moment");
            } else {
              window.open(paymentLink);
            }
          }
        }).catch(() => {
          toast.error("Unable to send Payment Link");
        }).finally(() => {
          setIsOrderLoading(false);
        })
      }
    })
  }

  return (
    <div>
      <div className="border rounded-lg p-6 bg-white">
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
            onClick={() => {
              if (user.isLoggedIn == false) {
                toast("Login To Checkout")
                setOpen(true);
              } else {
                addOrder();
              }
            }}
            className="w-full text-black cursor-pointer"
            disabled={isOrderloading}>
            {
              isOrderloading &&
              <LoadingSpinner size={20} />
            }
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
