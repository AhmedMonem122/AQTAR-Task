import Products from "@/components/Products/Products";
import ProductsSkeleton from "@/components/ProductSkeleton/ProductSkeleton";
import { localServer } from "@/lib/axios-server";
import { AxiosError } from "axios";
import { Suspense } from "react";

interface ErrorResponse {
  message: string;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const {
      data: { products },
    } = await localServer.get("/api/products");

    return (
      <Suspense fallback={<ProductsSkeleton />}>
        <Products products={products} />
      </Suspense>
    );
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          {axiosError.response?.data?.message || axiosError.message}
        </h2>
        <p className="mt-2 text-gray-600">Please try again later</p>
      </div>
    );
  }
}
