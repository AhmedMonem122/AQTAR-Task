import { fakeStoreServer } from "@/lib/axios-server";
import { AxiosError } from "axios";

export const GET = async (
  _request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) => {
  try {
    const { id } = await params;

    const { data } = await fakeStoreServer.get(`/products/${id}`);
    return new Response(
      JSON.stringify({
        product: data,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    return new Response(JSON.stringify({ error: axiosError.message }), {
      status: axiosError.response?.status || 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
