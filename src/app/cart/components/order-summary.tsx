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

  const [selectedPaymentType, setSelectedpaymentType] = useState('chapa');
  const [isOrderloading, setIsOrderLoading] = useState(false);

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const shipping = 0;
  const total = getTotalPrice();

  const addOrder = async () => {
    if (phone == "") {
      toast.error("Phone Number is Required");
    } else {
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
        guestEmail: email,
        guestPhone: phone
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
  }

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
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <div className="flex">
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="rounded-r-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <div className="flex">
              <Input
                id="email"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                className="rounded-r-none"
              />
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
          {
            process.env.NODE_ENV == "development" ?
              !user.isLoggedIn &&
              <button
                className='px-3 py-2 bg-blue-500 text-white my-3 rounded'
                onClick={() => {
                  const data = {
                    first_name: "Natnael",
                    hash: "123123",
                    id: 1234312,
                    photo_url: "https://avatars.githubusercontent.com/u/43242583?v=4",
                    username: "natnaelengeda"
                  }

                  axios.post(`/auth/telegram-login`, {
                    first_name: data.first_name,
                    hash: data.hash,
                    id: data.id,
                    photo_url: data.photo_url,
                    username: data.username
                  }).then((response) => {
                    const status = response.status;
                    if (status == 200) {
                      const id = response.data.id;
                      localStorage.setItem("id", id);
                      login({
                        id: data.id,
                        name: data.first_name,
                        role: "user",
                        photo_url: data.photo_url ?? "",
                        isLoggedIn: true,
                      });
                      toast.success("Login Success")
                    }
                  }).catch(() => {
                    toast.error("Unable to login, try again later")
                  })

                }}
              >
                Login With Telegram
              </button> :
              <>
                {!user.isLoggedIn &&
                  <LoginButton
                    botUsername={"melu_clothes_shop_bot"}
                    onAuthCallback={(data) => {
                      axios.post(`/auth/telegram-login`, {
                        first_name: data.first_name,
                        hash: data.hash,
                        id: data.id,
                        photo_url: data.photo_url,
                        username: data.username
                      }).then((response) => {
                        const status = response.status;
                        if (status == 200) {
                          login({
                            id: data.id,
                            name: data.first_name,
                            role: "user",
                            photo_url: data.photo_url ?? "",
                            isLoggedIn: true,
                          });
                          toast.success("Login Success")
                        }
                      }).catch(() => {
                        toast.error("Unable to login, try again later")
                      })
                    }}
                    buttonSize="large" // "large" | "medium" | "small"
                    cornerRadius={20} // 0 - 20
                    showAvatar={true} // true | false
                    lang="en"
                  />}
              </>
          }


          <Button
            onClick={() => {
              if (user.isLoggedIn == false) {
                toast("Login with Telegram First");
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
