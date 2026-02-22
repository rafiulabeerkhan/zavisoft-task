const ProductCard = ({ product }) => {
  return (
    <div className="min-w-70 bg-white rounded-3xl p-2 shadow-sm">
      <div className="relative rounded-2xl overflow-hidden">
        {/* Badge */}
        <span
          className="absolute top-0 left-0 bg-[#4A69E2] text-white text-xs px-4 py-3
                    rounded-br-4xl font-bold"
        >
          New
        </span>

        {/* Product Image */}
        <img
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <h3 className="mt-4 font-semibold text-sm">{product.title}</h3>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm font-medium">
        VIEW PRODUCT - <span className="text-yellow-400">${product.price}</span>
      </button>
    </div>
  );
};

export default ProductCard;
