import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/productService";
import ProductCarousel from "../components/product/ProductCarousel";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getProductsById(id)
      .then(setProduct)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-10">Loading...</div>;

  if (!product || product.statusCode === 404)
    return <div className="p-10">Product Not Found</div>;

  return (
    <>
      {/* Product Images & Details */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Images */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
          <img
            src={product.images?.[0] || "/placeholder.png"}
            alt={`${product.title} main image`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Details */}
        <div>
          <div className="flex justify-start">
            <button className="px-4 py-1.5 bg-[#4A69E2] text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
              New Release
            </button>
          </div>

          <h1 className="text-2xl font-bold mt-4">{product.title}</h1>

          <p className="text-blue-600 text-xl font-semibold mt-2">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <button className="mt-8 w-full bg-black text-white py-3 rounded-xl">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Full-width Product Carousel */}
      <div className="max-w-7xl mx-auto p-6 mt-12">
        <ProductCarousel />
      </div>
    </>
  );
}
