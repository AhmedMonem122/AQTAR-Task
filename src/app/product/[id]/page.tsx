import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton/ProductDetailsSkeleton";
import { localServer } from "@/lib/axios-server";
import { AxiosError } from "axios";
import { Suspense } from "react";
import { notFound } from "next/navigation";

// interface ErrorResponse {
//   message: string;
// }

export const dynamic = "force-dynamic";

const ProductDetailsPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  try {
    const {
      data: { product },
    } = await localServer.get(`/api/products/${params.id}`);

    if (!product) {
      return notFound();
    }

    return (
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetails {...product} />
      </Suspense>
    );
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      return notFound();
    }
    throw error; // Let Next.js error boundary handle other errors
  }
};

export default ProductDetailsPage;
