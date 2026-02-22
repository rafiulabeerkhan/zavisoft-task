import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/productService";
import ProductCarousel from "../components/product/ProductCarousel";
import heart from "../assets/Logo/heartIcon.png";
import Cart from "../components/product/Cart";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getProductsById(id)
      .then(setProduct)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (!product || product.statusCode === 404)
    return <div className="p-10">Product Not Found</div>;

  const handleBuyNow = () => {
    setShowCart(true);
  };

  return (
    <>
      {showCart ? (
        <div className="max-w-7xl mx-auto p-6">
          <Cart product={product} />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
            <img
              src={product.images?.[0] || "/placeholder.png"}
              alt={`${product.title} main image`}
              className="w-full h-full object-cover"
            />
          </div>

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

            <div className="mt-6">
              <h3 className="text-sm font-semibold tracking-wide mb-3">
                COLOR
              </h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full bg-gray-900"></span>
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-transparent flex items-center justify-center">
                  <span className="w-7 h-7 rounded-full bg-green-600"></span>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-semibold tracking-wide">SIZE</h3>
                <button className="text-xs font-medium underline">
                  SIZE CHART
                </button>
              </div>

              <div className="flex flex-wrap gap-3">
                {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-lg font-medium transition
                        ${
                          size === 38
                            ? "bg-black text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                  ADD TO CART
                </button>
                <button className="w-14 bg-black flex items-center justify-center rounded-xl hover:bg-gray-800 transition">
                  <img src={heart} alt="love" className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleBuyNow}
                className="w-full bg-[#4A69E2] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                BUY IT NOW
              </button>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3">ABOUT THE PRODUCT</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto p-6 mt-12">
        <ProductCarousel />
      </div>
    </>
  );
}
