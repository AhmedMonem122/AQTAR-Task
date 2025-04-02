import AddEditProduct from "@/components/AddEditProduct/AddEditProduct";
import { localServer } from "@/lib/axios-server";
import { AxiosError } from "axios";
import { notFound } from "next/navigation";

// interface ErrorResponse {
//   message: string;
// }

export const dynamic = "force-dynamic";

const EditProductPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  try {
    const { id } = await params;

    const {
      data: { product },
    } = await localServer.get(`/api/products/${id}`);

    if (!product) {
      return notFound();
    }

    return <AddEditProduct product={product} isEditing />;
  } catch (error) {
    if ((error as AxiosError).response?.status === 404) {
      return notFound();
    }
    throw error; // Let Next.js error boundary handle other errors
  }
};

export default EditProductPage;
