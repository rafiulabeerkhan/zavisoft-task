import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/Products/useProducts";

const ProductCarousel = () => {
  const { products, loading, error } = useProducts(8);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320;

    if (!current) return;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">You may also like</h2>
        <p className="text-red-500">Failed to load products.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F4F4] py-10 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">You may also like</h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 bg-gray-300 rounded-md flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 bg-black text-white rounded-md flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {products?.map((product) => (
          <div key={product.id} className="min-w-[280px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;