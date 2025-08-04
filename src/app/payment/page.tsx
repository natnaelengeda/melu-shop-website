"use client";
import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

// components
import DefaultLayout from '@/layouts/default-layout';

// api
import axios from "@/utils/axios";
import PaymentLoadingSkeleton from './components/payment-loading-skeleton';
import PaymentData from './components/payment-data';

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

export default function PaymentSuccess() {
  const [loading, setLoading] = useState<boolean>(true);
  const [payment, setPayment] = useState<Payment | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const fetchPaymentFunction = async () => {
    axios.get(`/payments/payment-order-details/${id}`)
      .then((response) => {
        console.log(response.data);
        const status = response.status;
        if (status == 200) {
          setOrder(response.data.order[0]);
          setPayment(response.data.payment);
          setLoading(false);
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
        className='pt-5'>
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
