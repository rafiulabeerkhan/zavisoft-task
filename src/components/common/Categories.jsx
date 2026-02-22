import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import useCategories from "../../hooks/Products/useCategories";

export default function Categories() {
  const { categories, loading, error } = useCategories();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [categories]);

  const totalItems = categories.length;
  const maxIndex = totalItems - itemsPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error) {
    return <p className="text-red-500 p-10">{error}</p>;
  }

  return (
    <section className="bg-[#1F1F1F] px-4 sm:px-8 md:px-16 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
          CATEGORIES
        </h2>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-9 h-9 flex items-center justify-center bg-[#E7E7E3] hover:bg-gray-400 text-black rounded-md transition disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-9 h-9 flex items-center justify-center bg-[#E7E7E3] hover:bg-gray-400 text-black rounded-md transition disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {categories.map((category, index) => (
            <div key={category.id} className="min-w-full md:min-w-[50%] px-2">
              <div
                className={`bg-[#FAFAFA] ${
                  index === 0 ? "rounded-tl-3xl" : ""
                } overflow-hidden relative group`}
              >
                <div className="aspect-16/10 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="flex items-center justify-between px-6 pb-6 mt-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-black leading-tight uppercase">
                    {category.name}
                  </h3>

                  <button className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-md">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
