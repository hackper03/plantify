import React from 'react'

const PlantCareCard = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Care Card 1 --> */}
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="h-48 bg-green-100 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-green-500 opacity-75"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2v8"></path>
          <path d="M5 5.3C3.4 6.8 2.4 9 2.2 11.2c-.2 2.3.5 4.6 2.2 6.4 3.1 3.3 8.1 3.3 11.3 0 1.6-1.8 2.4-4.1 2.2-6.4C17.6 9 16.6 6.8 15 5.3L12 3"></path>
          <path d="M12 22v-3"></path>
        </svg>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          Common Plant Problems & Solutions
        </h3>
        <p class="text-gray-600 text-sm mb-4">
          Learn to identify and treat common issues like yellowing
          leaves, brown tips, pests, and more.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    {/* <!-- Care Card 2 --> */}
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="h-48 bg-green-100 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-green-500 opacity-75"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          <path d="M12.02 0.15c0.988 .152 1.98 1.45 2 3.35c.088 2 -1.124 3.5 -2 3.5c-.913 0 -2.11 -1.503 -2 -3.5c.024 -1.95 .999 -3.198 2 -3.35z"></path>
          <path d="M12.99 21.992c-.988 -.152 -1.98 -1.45 -2 -3.35c-.088 -2 1.124 -3.5 2 -3.5c.913 0 2.11 1.503 2 3.5c-.024 1.95 -.999 3.198 -2 3.35z"></path>
          <path d="M20.83 12.014c-.152 .988 -1.45 1.98 -3.35 2c-2 .088 -3.5 -1.124 -3.5 -2c0 -.913 1.503 -2.11 3.5 -2c1.95 .024 3.198 .999 3.35 2z"></path>
          <path d="M3.17 11.986c.152 -.988 1.45 -1.98 3.35 -2c2 -.088 3.5 1.124 3.5 2c0 .913 -1.503 2.11 -3.5 2c-1.95 -.024 -3.198 -.999 -3.35 -2z"></path>
        </svg>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          Seasonal Plant Care Calendar
        </h3>
        <p class="text-gray-600 text-sm mb-4">
          Follow our month-by-month guide to keep your plants thriving
          throughout the changing seasons.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

    {/* <!-- Care Card 3 --> */}
    <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div class="h-48 bg-green-100 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-24 w-24 text-green-500 opacity-75"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"></path>
          <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"></path>
          <line x1="12" y1="20" x2="12" y2="10"></line>
        </svg>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          Beginner-Friendly Plants
        </h3>
        <p class="text-gray-600 text-sm mb-4">
          Discover the best low-maintenance plants that are perfect for
          plant novices and busy lifestyles.
        </p>
        <a
          href="#"
          class="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  )
}

export default PlantCareCard