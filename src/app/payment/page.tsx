"use client";
import React, { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

// components
import DefaultLayout from '@/layouts/default-layout';

// api
import axios from "@/utils/axios";
import PaymentLoadingSkeleton from './components/payment-loading-skeleton';
import PaymentData from './components/payment-data';

export default function PaymentSuccess() {
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const fetchPaymentFunction = async () => {
    axios.get(`/payments/payment-order-details/${id}`)
      .then((response) => {
        console.log(response.data)
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
          loading ?
            <PaymentLoadingSkeleton /> :
            <PaymentData />
        }
      </div>
    </DefaultLayout>
  )
}
