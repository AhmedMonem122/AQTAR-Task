const ProductDetailsSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="animate-pulse bg-gray-200 rounded-xl aspect-square" />

        {/* Content Skeleton */}
        <div className="space-y-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded-lg w-3/4" />
          <div className="h-6 bg-gray-200 rounded-lg w-1/4" />
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
          <div className="h-12 bg-gray-200 rounded-lg w-full md:w-1/2" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetailsSkeleton;
