import { fakeStoreServer } from "@/lib/axios-server";
import { AxiosError } from "axios";

export const GET = async () => {
  try {
    const { data } = await fakeStoreServer.get("/products");
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
    return new Response(JSON.stringify({ error: axiosError.message }), {
      status: axiosError.response?.status || 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const product = await request.json();
    
    const { data } = await fakeStoreServer.post("/products", product);
    
    return new Response(
      JSON.stringify({
        message: "Product added successfully",
        product: data
      }), 
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const axiosError = error as AxiosError;
    return new Response(
      JSON.stringify({ 
        error: axiosError.message 
      }), 
      {
        status: axiosError.response?.status || 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};