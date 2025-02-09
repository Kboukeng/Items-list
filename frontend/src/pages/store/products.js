import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (
      !newProduct.name ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.image ||
      !newProduct.category
    ) {
      return { success: false, message: "All fields are required" };
    }
    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });
    const data = await res.json();
    set((sate) => ({
      products: [...sate.products, data.data]
    }));
    return { success: true, message: "Product added successfully" };
  }
}));
