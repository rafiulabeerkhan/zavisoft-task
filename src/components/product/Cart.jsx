import heart from "../../assets/Logo/heart.png";
import bin from "../../assets/Logo/Bin.png";
import down from "../../assets/Logo/downArray.svg";
export default function Cart({ product }) {
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 p-6 rounded-2xl">
      <h1 className="text-lg font-bold">Saving to celebrate</h1>
      <p className="text-[#232321] text-sm mt-1">
        Enjoy up to 60% off thousands of styles during the end of year sale –
        while supplies last. No code needed.
      </p>
      <h6 className="mt-2 text-sm">
        <a href="" className="underline">
          Join us
        </a>{" "}
        &nbsp; or &nbsp;
        <a href="" className="underline">
          Sign in
        </a>
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
        <div className="bg-white p-4 rounded-xl space-y-4 md:col-span-8">
          <h2 className="text-xl font-bold">Your Bag</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <img
              src={product.images?.[0] || "/placeholder.png"}
              alt={product.title}
              className="w-full sm:w-32 h-auto object-contain rounded-lg"
            />
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-blue-600 font-semibold mt-1 sm:mt-0">
                  ${product.price}.00
                </p>
              </div>

              <p className="text-gray-500 text-sm mt-1">{product.slug || ""}</p>

              <div className="flex flex-wrap gap-4 text-sm mt-2">
                <p>Size {product.size || "N/A"}</p>
                <img src={down} alt="Down" className="h-4 w-4" />
                <p>Quantity {product.quantity || 1}</p>
                <img src={down} alt="Down" className="h-4 w-4" />
              </div>

              <div className="flex gap-3 mt-4">
                <img src={heart} alt="heart" className="h-5 w-5" />
                <img src={bin} alt="bin" className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-sm rounded-xl md:col-span-4 justify-end self-start w-full mx-auto md:mx-0">
          <h3 className="font-bold mb-4 text-lg md:text-xl">Order Summary</h3>

          <div className="flex justify-between mb-2 text-base md:text-sm">
            <span>1 ITEM</span>
            <span>${product.price}</span>
          </div>

          <div className="flex justify-between mb-2 text-base md:text-sm">
            <span>Delivery</span>
            <span>$6.99</span>
          </div>

          <div className="flex justify-between mb-2 text-base md:text-sm">
            <span>Sales Tax</span>
            <span>-</span>
          </div>

          <div className="flex justify-between mb-4 font-bold text-base md:text-sm">
            <span>Total</span>
            <span>${(product.price + 6.99).toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white text-base md:text-sm py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            CHECKOUT
          </button>

          <div className="mt-3 underline text-[#232321] text-base md:text-sm text-center md:text-left">
            <a href="">Use a promo code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
