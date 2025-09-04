import React from 'react'

export default function OrderItems({ order }: any) {
  return (
    <div>
      {order.items && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Order Items</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            {order.items.map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                <div>
                  <span className="font-medium">{item.product.name}</span>
                  <span className="text-gray-500 ml-2">x{item.quantity}</span>
                </div>
                <span className="font-medium">${(parseInt(item.priceAtPurchase) * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
