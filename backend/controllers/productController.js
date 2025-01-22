import Product from "../models/productsModel.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }  
}


export const createProduct = async (req, res) => {
    const product = req.body;

    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.image ||
      !product.category
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product(product);

    try {
      await newProduct.save();
      res
        .status(201)
        .json({
          success: true,
          data: newProduct,
          message: "Product added successfully"
        });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ success: false, message: "Error adding product" });
    }
}


export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    try {
      await Product.findByIdAndUpdate(id, product, { new: true });
      res
        .status(200)
        .json({ success: true, message: "Product updated successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Product not found" });
    }
}


export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
      await Product.findByIdAndDelete(id);
      res
        .status(200)
        .json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Product not found" });
    }
}