import React from 'react'

// utils
import { formatDate } from '@/utils/formatDate';
import { getStatusColor } from '@/utils/getStatusColor';
import { getPaymentStatusColor } from '@/utils/getPaymentStatusColor';

// icons
import { Package, Mail, Phone, CreditCard, Truck, Store, ArrowLeft } from 'lucide-react';
import OrderItems from './order-items';

export default function OrderDetail({ order, onBack }: any) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors cursor-pointer">
          <ArrowLeft
            className="w-5 h-5" />
          Back to Orders
        </button>
      </div>

      <div className="border-b border-gray-200 pb-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-8 h-8 text-orange-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{order.id}</h2>
            <p className="text-gray-500">
              Order placed on {formatDate(order.createAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
            Payment {order.paymentStatus}
          </span>
          {order.isDelivery && (
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Delivery
            </span>
          )}
          {order.isPickup && (
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 flex items-center gap-2">
              <Store className="w-4 h-4" />
              Pickup
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Customer Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{order.guestEmail}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{order.guestPhone}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Payment Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CreditCard
                className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">{order.paymentMethod}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Purchase Type:</span>
              <span className="font-medium">{order.purchaseType}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-lg font-bold text-gray-800">Total Amount:</span>
              <span className="text-xl font-bold text-orange-600">${parseInt(order.totalAmount).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <OrderItems order={order} />
    </div>
  )
}
