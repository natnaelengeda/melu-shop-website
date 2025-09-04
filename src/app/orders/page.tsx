'use client';

import React, { useEffect, useState } from 'react';

// components
import FlowerSVG from './components/flower-svg';
import DefaultLayout from '@/layouts/default-layout';
import OrderCard from './components/order-card';
import OrderDetail from './components/order-detail';
import OrderCardSkeleton from './components/order-loading-skeleton';

// api
import { useGetOrders } from '@/api/orders';

// icons
import { Package } from 'lucide-react';


type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

type Order = {
  id: string;
  guestEmail: string;
  guestPhone: string;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
  purchaseType: string;
  isDelivery: boolean;
  isPickup: boolean;
  totalAmount: number;
  createAt: string;
  items: OrderItem[];
};


export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { data, isPending } = useGetOrders();

  console.log(data);

  const [orders, setOrders] = useState<Order[] | []>([]);

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);

  const handleOrderClick = (order: any) => {
    setSelectedOrder(order);
  };

  const handleBackClick = () => {
    setSelectedOrder(null);
  };

  return (
    <DefaultLayout>
      <div className='min-h-screen bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50 relative overflow-hidden' style={{ backgroundColor: '#fcefe3' }}>
        {/* Top Right Flower */}
        <FlowerSVG
          className="absolute top-0 right-0 w-80 h-80 opacity-40 animate-pulse"
          position="top-right" />

        {/* Bottom Left Flower */}
        <FlowerSVG
          className="absolute bottom-0 left-0 w-96 h-96 opacity-30 animate-pulse"
          position="bottom-left" />

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-40 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-32 right-60 w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-60 left-40 w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />

        {/* Floating animation elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '4s' }} />

        <div className='relative z-10 w-full mx-auto md:container h-full min-h-screen flex flex-col gap-10 items-center py-10'>
          <div className='w-full md:w-4/5 flex flex-col gap-8 px-5 md:px-2 text-gray-600'>

            {/* Title */}
            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                {selectedOrder ? 'Order Details' : 'Orders'}
              </h1>
              {!selectedOrder && (
                <p className='text-base md:text-lg'>
                  Manage and track all customer orders from Melu Clothes Shop.
                </p>
              )}
            </div>

            {/* Content */}
            <div className='w-full flex flex-col gap-6'>
              {selectedOrder ? (
                <OrderDetail
                  order={selectedOrder}
                  onBack={handleBackClick} />
              ) : (
                <>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                      Showing {orders.length} order{orders.length !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="grid gap-6">
                    {
                      isPending ?
                        Array.from({ length: 3 }).map((_, index) => (
                          <OrderCardSkeleton key={index} />
                        )) :
                        orders &&
                        orders.map((order: Order, index: number) => (
                          <OrderCard
                            key={index}
                            order={order}
                            onClick={handleOrderClick}
                          />
                        ))
                    }
                  </div>

                  {orders.length === 0 && (
                    <div className="text-center py-12">
                      <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-500 mb-2">No orders found</h3>
                      <p className="text-gray-400">Orders will appear here when customers make purchases.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}