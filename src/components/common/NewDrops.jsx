import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/Products/useProducts";

export default function NewDrops() {
  const { products, loading, error } = useProducts(8);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-10 bg-[#FAFAFA]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
          DON’T MISS OUT <br className="hidden sm:block" /> NEW DROPS
        </h2>

        <button className="w-full sm:w-auto px-6 sm:px-7 py-2.5 bg-[#4A69E2] text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          SHOP NEW DROPS
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full aspect-square overflow-hidden pt-0.5">
              <img
                src={
                  product.images?.length
                    ? product.images[0]
                    : "/placeholder.png"
                }
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Name */}
              <h3 className="text-sm sm:text-base font-Rubik font-semibold text-gray-800 mb-3 line-clamp-2">
                {product.title}
              </h3>

              {/* Button + Price */}
              {/* <button className="mt-auto w-full bg-gray-900 text-white text-sm py-2.5 rounded-lg hover:bg-gray-800 transition flex justify-between items-center px-3">
                <span>View Product</span>
                <span className="text-yellow-400 font-semibold">
                  ${product.price}
                </span>
              </button> */}
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="mt-auto w-full bg-gray-900 text-white text-sm py-2.5 rounded-lg hover:bg-gray-800 transition flex justify-between items-center px-3"
              >
                <span>View Product</span>
                <span className="text-yellow-400 font-semibold">
                  ${product.price}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
