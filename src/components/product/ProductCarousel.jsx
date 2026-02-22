import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/Products/useProducts";

const ProductCarousel = () => {
  const { products, loading, error } = useProducts(8);
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const totalSteps = 4;
  const scrollAmount = 320;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = (el.scrollLeft / maxScroll) * 100;

    setScrollProgress(progress);
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    if (direction === "right" && currentIndex < totalSteps - 1) {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => prev + 1);
    }

    if (direction === "left" && currentIndex > 0) {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      setCurrentIndex((prev) => prev - 1);
    }
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

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {products?.map((product) => (
          <div key={product.id} className="min-w-70">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-12 rounded-full transition-all duration-300 ${
              index <= currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
