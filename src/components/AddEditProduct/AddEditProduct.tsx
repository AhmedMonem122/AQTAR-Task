"use client";

import { Product } from "@/types/products.type";
import { useState } from "react";

interface AddEditProductProps {
  product?: Product;
  isEditing?: boolean;
}

const AddEditProduct = ({ product, isEditing }: AddEditProductProps) => {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || "",
    image: product?.image || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {isEditing ? "Edit Product" : "Add New Product"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Product Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              step="0.01"
              min="0"
              required
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200"
            >
              {isEditing ? "Update Product" : "Add Product"}
            </button>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddEditProduct;
