const ProductsSkeleton = () => (
  <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="bg-white rounded-xl shadow-md p-4 animate-pulse">
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>
    ))}
  </div>
);

export default ProductsSkeleton;
