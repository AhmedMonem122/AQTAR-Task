import { axiosServer } from "@/lib/axios-server";
import { AxiosError } from "axios";

export const GET = async () => {
  try {
    const { data } = await axiosServer.get('/products');
    return new Response(
      JSON.stringify({
        products: data,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    return new Response(
      JSON.stringify({ error: axiosError.message }),
      { 
        status: axiosError.response?.status || 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
