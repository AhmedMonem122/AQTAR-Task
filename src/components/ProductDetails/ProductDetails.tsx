import type { Product } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";
import DeleteProductButton from "../DeleteProductButton/DeleteProductButton";

const ProductDetails = ({ id, image, title, description, price }: Product) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-4"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{description}</p>
            <div className="text-3xl font-bold text-blue-600 mb-8">
              ${price.toFixed(2)}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
              <Link
                href={`/product/edit/${id}`}
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Edit Product
              </Link>
              <DeleteProductButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
