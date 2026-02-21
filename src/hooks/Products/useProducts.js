import { useState, useEffect } from "react";
import { getProducts } from "../../services/productService";

export default function useProducts(limit = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
       
        setProducts(limit ? data.slice(0, limit) : data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  return { products, loading, error };
}