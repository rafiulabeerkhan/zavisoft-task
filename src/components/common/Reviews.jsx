import React, { useState } from "react";
import { Star } from "lucide-react";
import Review01 from "../../assets/ReviewPictures/ReviewPic-01.png";
import Review02 from "../../assets/ReviewPictures/ReviewPic-02.png";
import Review03 from "../../assets/ReviewPictures/ReviewPic-03.png";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: Review01,
  },
  {
    id: 2,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    image: Review02,
  },
  {
    id: 3,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    image: Review03,
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
          REVIEWS
        </h2>
        <button
          className="bg-[#4A69E2] text-white px-4 py-1 rounded-md hover:bg-blue-700 transition text-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "SHOW LESS" : "SEE ALL"}
        </button>
      </div>
      <div
        className={`grid gap-6 transition-all duration-500 ${
          showAll
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-h-[700px] overflow-hidden"
        }`}
      >
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transform transition-all duration-500 ${
              !showAll && index > 0 ? "hidden sm:block md:block" : ""
            }`}
          >
            <div className="relative bg-white rounded-lg overflow-hidden">
              <img
                src={review.avatar}
                alt="Avatar"
                className="w-10 h-10 rounded-full absolute top-4 right-4"
              />

              <div className="px-6 pt-16 pb-4 flex flex-col gap-2">
                <h3 className="font-bold text-lg">{review.title}</h3>
                <p className="text-gray-600 text-sm">{review.text}</p>
                <div className="flex items-center gap-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#FFA52F] fill-[#FFA52F]"
                    />
                  ))}
                  <span className="text-gray-500 text-md font-bold">
                    {review.rating}.0
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={review.image}
                alt="Review"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
