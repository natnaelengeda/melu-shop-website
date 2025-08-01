"use client";
import React from 'react'

// components
import DefaultLayout from '@/layouts/default-layout';
import ProductDetail from './components/product-detail';
import ProductDetailsSkeleton from './components/product-details-skeleton';

// api
import { useGetProductById } from '@/api/products';

type Props = {
  params: Promise<{ id: string }>;
};

export default function Page({ params }: Props) {
  const { id } = React.use(params);
  const { data, isPending } = useGetProductById(+id);

  return (
    <DefaultLayout>
      {
        isPending ?
          <ProductDetailsSkeleton /> :
          <>
            {
              data &&
              <ProductDetail
                product={data} />
            }
          </>
      }

    </DefaultLayout>
  )
}

