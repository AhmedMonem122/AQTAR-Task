import { Product } from "@/types/products.type";
import Link from "next/link";
import ProductItem from "./Product";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
          Our Products
        </h1>
        <Link
          href="/product/new"
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <span>Add Product</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
