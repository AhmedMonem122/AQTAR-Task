import type { Product } from "@/types/products.type";
import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ id, image, title, description, price }: Product) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="relative w-full pt-[100%]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-4"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 font-bold">${price}</span>
          <Link
            href={`/product/${id}`}
            className="text-sm text-blue-500 hover:text-blue-600 font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
