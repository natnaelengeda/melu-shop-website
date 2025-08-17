import React from 'react'

// utils
import { formatDate } from '@/utils/formatDate'
import { getStatusColor } from '@/utils/getStatusColor'
import { getPaymentStatusColor } from '@/utils/getPaymentStatusColor'

// icons
import { Calendar, ChevronRight, CreditCard, Mail, Package, Phone, Store, Truck } from 'lucide-react'

export default function OrderCard({ order, onClick }: any) {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-orange-100"
      onClick={() => onClick(order)}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Package className="w-6 h-6 text-orange-500" />
          <div>
            <h3 className="font-bold text-lg text-gray-800">{order.id}</h3>
            <p className="text-sm text-gray-500">
              <Calendar className="w-4 h-4 inline mr-1" />
              {formatDate(order.createAt)}
            </p>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4" />
          {order.guestEmail}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          {order.guestPhone}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.paymentStatus)}`}>
          {order.paymentStatus}
        </span>
        {order.isDelivery && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 flex items-center gap-1">
            <Truck className="w-3 h-3" />
            Delivery
          </span>
        )}
        {order.isPickup && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 flex items-center gap-1">
            <Store className="w-3 h-3" />
            Pickup
          </span>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <CreditCard className="w-4 h-4" />
          {order.paymentMethod}
        </div>
        <div className="font-bold text-lg text-orange-600">
          {order.totalAmount.toFixed(2)} ETB
        </div>
      </div>
    </div>
  )
}
