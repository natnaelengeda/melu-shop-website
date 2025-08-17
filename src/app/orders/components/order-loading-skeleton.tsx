import { Skeleton } from "@/components/ui/skeleton" // shadcn/ui skeleton

export default function OrderCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-orange-100 animate-pulse">
      {/* Top section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Skeleton className="w-6 h-6 rounded-md" />
          <div>
            <Skeleton className="h-5 w-24 mb-2 rounded" />
            <Skeleton className="h-4 w-32 rounded" />
          </div>
        </div>
        <Skeleton className="w-5 h-5 rounded-md" />
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded-md" />
          <Skeleton className="h-4 w-32 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded-md" />
          <Skeleton className="h-4 w-28 rounded" />
        </div>
      </div>

      {/* Status Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      {/* Payment + Total */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 rounded-md" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
        <Skeleton className="h-6 w-16 rounded" />
      </div>
    </div>
  )
}
