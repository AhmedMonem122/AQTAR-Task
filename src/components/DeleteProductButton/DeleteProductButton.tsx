"use client";

import { localServer } from "@/lib/axios-server";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";

const DeleteProductButton = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();

  const handleDeleteProduct = async () => {
    try {
      setIsDeleting(true);
      const {
        data: { message },
      } = await localServer.delete(`/api/products/${id}`);
      toast.success(message);
      setIsOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to delete product");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Delete Product
      </button>

      {isOpen && (
        <DeleteConfirm
          onDelete={handleDeleteProduct}
          onClose={() => setIsOpen(false)}
          isDeleting={isDeleting}
        />
      )}
    </>
  );
};

export default DeleteProductButton;
