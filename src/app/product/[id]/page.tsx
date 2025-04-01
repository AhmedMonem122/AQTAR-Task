import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { localServer } from "@/lib/axios-server";
import { AxiosError } from "axios";

interface ErrorResponse {
  message: string;
}

export const dynamic = "force-dynamic";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;

  try {
    const {
      data: { product },
    } = await localServer.get(`/api/products/${id}`);

    return <ProductDetails {...product} />;
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
};

export default ProductDetailsPage;
