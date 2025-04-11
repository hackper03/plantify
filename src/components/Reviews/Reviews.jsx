import React from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    imageUrl:"src/assets/images/monstera_deliciosa.webp",
    name: "John Doe",
    rating: 5,
    description: "The team transformed my tiny balcony into an incredible green sanctuary! They understood my vision perfectly and selected plants that thrive in my specific lighting conditions. I'm absolutely in love with my new outdoor space.",
    year: 2022
  }, 
  {
    imageUrl: "src/assets/images/monstera_deliciosa.webp",
    name: "Sophia Martinez",
    rating: 5,
    description: "I've ordered plants from many online stores, but none compare to the quality I received here. The plants arrived in perfect condition, carefully packaged, and even better than the photos. Their customer service is exceptional too!",
    year: 2021
  },
  {
    imageUrl: "src/assets/images/monstera_deliciosa.webp",
    name: "David Chen",
    rating: 5,
    description: "TAs a complete beginner with plants, I was nervous about investing in a vertical garden. The team made it so easy! They installed everything and gave me a simple care guide. Six months later, my wall is thriving and my apartment feels like a retreat.",
    year: 2023
  }
]

const Reviews = () => {
  return (
    <div id="root">
      <section id="testimonials" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p class="text-gray-600">
              Read testimonials from plant enthusiasts who have transformed
              their spaces with our products and services.
            </p>
          </div>

          {/* <!-- Testimonials Carousel --> */}
          <div class="relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* <!-- Testimonial 1 --> */}
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>

            {/* <!-- Navigation Arrows --> */}
            <div class="hidden md:block">
              <button
                class="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none transition duration-300"
                ariaLabel="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                class="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none transition duration-300"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Indicator Dots --> */}
          <div class="flex justify-center mt-8 space-x-2">
            <button
              class="w-3 h-3 rounded-full bg-green-600"
              aria-label="Go to slide 1"
            ></button>
            <button
              class="w-3 h-3 rounded-full bg-gray-300 hover:bg-green-400 transition-colors duration-300"
              aria-label="Go to slide 2"
            ></button>
            <button
              class="w-3 h-3 rounded-full bg-gray-300 hover:bg-green-400 transition-colors duration-300"
              aria-label="Go to slide 3"
            ></button>
          </div>

          {/* <!-- Featured In Section --> */}
          <div class="mt-20">
            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold text-gray-700">
                As Featured In
              </h3>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M15 4v16" />
                </svg>
              </div>
              <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19c0-4.2-2.8-7-7-7m14 0c-4.2 0-7 2.8-7 7m0-14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
              <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9" />
                  <path d="M12 2c-2.4 0-4.5 1.8-4.5 4.5S9.6 11 12 11c2.4 0 4.5-1.8 4.5-4.5" />
                  <path d="M12 22c2.4 0 4.5-1.8 4.5-4.5S14.4 13 12 13c-2.4 0-4.5 1.8-4.5 4.5" />
                </svg>
              </div>
              <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 15h12c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1Z" />
                  <path d="M18 4H6c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1Z" />
                  <path d="M12 20c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1s-1 .4-1 1v14c0 .6.4 1 1 1Z" />
                </svg>
              </div>
              <div class="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 5h16v16H4V5Z" />
                  <path d="M4 5c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v1H4V5Z" />
                  <path d="M4 12h16" />
                  <path d="M12 5v16" />
                </svg>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial CTA --> */}
          <div class="mt-16 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Love your experience with us?
            </h3>
            <a
              href="#"
              class="inline-block bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
