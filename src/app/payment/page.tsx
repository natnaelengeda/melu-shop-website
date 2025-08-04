"use client";
import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

// components
import DefaultLayout from '@/layouts/default-layout';

// api
import axios from "@/utils/axios";
import PaymentLoadingSkeleton from './components/payment-loading-skeleton';
import PaymentData from './components/payment-data';
import useCartStore from '@/store/cart';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  discountPrice: string;
  isDiscounted: boolean;
  isFeatured: boolean;
  stock: number;
  createdAt: string;
  images: {
    id: number,
    imageUrl: string,
    isPrimary: boolean,
  }[]
};

export type Order = {
  id: number
  guestEmail: string
  guestPhone: string
  status: string
  paymentMethod: string
  paymentStatus: string
  purchaseType: string
  isDelivery: boolean
  isPickup: boolean
  totalAmount: string
  items: {
    id: number
    quantity: number
    priceAtPurchase: string
    product: Product
  }[]
  createdAt: string
}

export type Payment = {
  id: number
  method: string
  status: string
  amount: string
  transactionId: string
  paymentDate: string
}

import { Suspense } from "react";

function PaymentSuccessContent() {
  const [loading, setLoading] = useState<boolean>(true);
  const [payment, setPayment] = useState<Payment | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const { clear } = useCartStore();

  const fetchPaymentFunction = async () => {
    axios.get(`/payments/payment-order-details/${id}`)
      .then((response) => {
        const status = response.status;
        if (status == 200) {
          setOrder(response.data.order[0]);
          setPayment(response.data.payment);
          setLoading(false);
          clear();
        }
      })
  }

  useEffect(() => {
    if (id) {
      fetchPaymentFunction();
    }

  }, [id]);
  return (
    <DefaultLayout>
      <div
        className='pt-5 overflow-hidden'>
        {
          (loading) ?
            <PaymentLoadingSkeleton /> :
            <>
              {
                (order && payment) &&
                <PaymentData
                  order={order}
                  payment={payment} />
              }
            </>
        }
      </div>
    </DefaultLayout>
  )
}

export default function PaymentSuccess() {
  return (
    <Suspense
      fallback={<PaymentLoadingSkeleton />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
