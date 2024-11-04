import axios from "axios";
import { Product } from '../types/product';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
