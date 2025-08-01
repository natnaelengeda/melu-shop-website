import React from 'react'

export default function ProductDetailsSkeleton() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
        {/* Product Images Skeleton */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden border bg-gray-200" />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden border bg-gray-200" />
            ))}
          </div>
        </div>
        {/* Product Details Skeleton */}
        <div className="space-y-6">
          <div>
            <div className="w-2/3 h-8 bg-gray-200 rounded mb-2" />
            <div className="w-1/3 h-6 bg-gray-200 rounded" />
          </div>
          <div className="w-full h-5 bg-gray-200 rounded" />
          <div className="space-y-4">
            <div>
              <div className="w-24 h-5 bg-gray-200 rounded mb-2" />
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-gray-200 rounded" />
                <div className="h-10 w-16 bg-gray-200 rounded" />
                <div className="h-10 w-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 h-12 bg-gray-200 rounded" />
            <div className="flex-1 h-12 bg-gray-200 rounded" />
          </div>
          <div>
            <div className="w-full h-10 bg-gray-200 rounded mb-2" />
            <div className="w-full h-10 bg-gray-200 rounded mb-2" />
            <div className="w-full h-10 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
