import React from 'react';
import Image from 'next/image';

// app asset
import AppAsset from '@/core/AppAsset';

interface IOrderItem {
  name: string;
  image: string;
  quantity: number;
  priceAtPurchase: string;
}

export default function OrderItem({ name, image, quantity, priceAtPurchase }: IOrderItem) {

  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg">
      <Image
        src={image || AppAsset.Logo}
        alt={`${name} Image`}
        width={80}
        height={80}
        className="rounded-md object-cover w-20 h-20" />
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">
        </p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">{(parseInt(priceAtPurchase) * quantity).toFixed(2)} ETB</p>
      </div>
    </div>
  )
}
