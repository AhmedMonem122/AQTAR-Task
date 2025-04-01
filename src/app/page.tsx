import Products from "@/components/Products/Products";
import { localServer } from "@/lib/axios-server";

export default async function Home() {
  const {
    data: { products },
  } = await localServer.get("/api/products");

  return <Products products={products} />;
}
