import React from 'react'
import GalleryCard from './GalleryCard'

const GalleryCardDetails = [
  {
    name: "Balcony Garden",
    description: "A beautiful balcony garden with a variety of plants and flowers.",
  }
]
const Service = () => {
  return (
    <div id="root">
    <section id="gallery" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        {/* <!-- Section Header --> */}
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p class="text-gray-600">Browse through our gallery of beautiful garden creations and plant installations that inspire urban green living.</p>
        </div>
  
        {/* <!-- Gallery Filters --> */}
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          <button class="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            All Projects
          </button>
          <button class="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Balcony Gardens
          </button>
          <button class="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Indoor Plants
          </button>
          <button class="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Vertical Gardens
          </button>
          <button class="bg-gray-100 text-gray-700 px-6 py-2 rounded-full text-sm font-medium transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
            Herb Gardens
          </button>
        </div>
  
        {/* <!-- Gallery Grid --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* <!-- Gallery Item 1 --> */}
          <GalleryCard props={GalleryCardDetails[0]}/>
  
          {/* <!-- Gallery Item 2 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                <path d="M12 8H7a4 4 0 1 0 0 8h5"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Vertical Living Wall</h3>
              <p class="text-gray-200 text-sm">Indoor plant wall transforming a small space</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* <!-- Gallery Item 3 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Herb Garden Kitchen</h3>
              <p class="text-gray-200 text-sm">Fresh herbs growing in a city apartment</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* <!-- Gallery Item 4 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 20.5 2 9l10-5 10 5-5 11.5z"></path>
                <path d="m2 9 10 5 10-5"></path>
                <path d="M12 14v7.5"></path>
                <path d="M12 4 7 6.875"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Succulent Corner</h3>
              <p class="text-gray-200 text-sm">Minimalist arrangement of rare succulents</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* <!-- Gallery Item 5 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22c3.771 0 5-2 5-6V9.657M6.741 7.732C7.522 5.738 9.698 3 12 3c2.4 0 4.024 2.5 4.024 2.5"></path>
                <path d="M3.41 11.01c-.07.29-.1.58-.1.88 0 2.54 2.2 4.61 4.91 4.61.46 0 .91-.06 1.33-.18"></path>
                <path d="M9.61 12.52A3.11 3.11 0 0 0 8.9 11"></path>
                <path d="M16.05 11.25a4.03 4.03 0 0 0-1.06-2.56"></path>
                <path d="M7.13 8.18c-2.04.85-3.4 2.82-3.4 5.08 0 3.03 2.47 5.5 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5c0-2.97-2.4-5.39-5.35-5.49"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Tropical Balcony Retreat</h3>
              <p class="text-gray-200 text-sm">Small balcony transformed into a jungle paradise</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* <!-- Gallery Item 6 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 12c-3-2.5-4.5-3.5-9-4 0 9 3.5 14.5 9 16 5.5-1.5 9-7 9-16-4.5.5-6 1.5-9 4Z"></path>
                <path d="M12 6.5c-1-1-2-1.5-4-2 0 4 1 7 4 9 3-2 4-5 4-9-2 .5-3 1-4 2Z"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Zen Garden Corner</h3>
              <p class="text-gray-200 text-sm">Peaceful meditation space with select plants</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* <!-- Gallery Item 7 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 22a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6"></path>
                <path d="M18 10.5V6a3.5 3.5 0 0 0-7 0v4.5"></path>
                <path d="M9 4.5V6a3.5 3.5 0 0 0 7 0V4.5"></path>
                <path d="M9 4.5h3.5A3.5 3.5 0 0 0 16 1h0"></path>
                <path d="M12.5 4.5H9A3.5 3.5 0 0 1 5.5 1h0"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Hanging Garden Display</h3>
              <p class="text-gray-200 text-sm">Creative use of limited space with hanging planters</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* <!-- Gallery Item 8 --> */}
          <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
            <div class="absolute inset-0 bg-green-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 3v10"></path>
                <path d="M19 11V3"></path>
                <path d="M5 21V11"></path>
                <path d="M19 21v-7"></path>
                <path d="M9 3h10v4c0 1.5 0 3-4 3s-6.5-1.5-6-3V3Z"></path>
                <path d="M9 21h10v-4c0-1.5 0-3-4-3s-6.5 1.5-6 3v4Z"></path>
              </svg>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-white font-semibold">Edible Balcony Garden</h3>
              <p class="text-gray-200 text-sm">Urban vegetable and herb garden project</p>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300" aria-label="View details">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* <!-- Load More Button --> */}
        <div class="text-center mt-10">
          <button class="inline-block px-6 py-3 bg-white border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition duration-300">
            Load More
          </button>
        </div>
  
        {/* <!-- Instagram Section --> */}
        <div class="mt-20">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Follow Our Green Journey</h3>
            <p class="text-gray-600">Get inspired by following us on Instagram <span class="text-green-600 font-medium">@plantoasis</span></p>
          </div>
          
          <div class="flex overflow-x-auto pb-4 space-x-4 no-scrollbar">
            {/* <!-- Instagram Post 1 --> */}
            <div class="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-64 bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </div>
              <div class="p-4">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span class="text-gray-600 text-sm">243 likes</span>
                </div>
                <p class="text-gray-700 text-sm line-clamp-2">Weekend project: Creating this beautiful wall of pothos and ferns! #UrbanJungle #PlantWall</p>
              </div>
            </div>
            
            {/* <!-- Instagram Post 2 --> */}
            <div class="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-64 bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </div>
              <div class="p-4">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span class="text-gray-600 text-sm">185 likes</span>
                </div>
                <p class="text-gray-700 text-sm line-clamp-2">Just completed this gorgeous balcony garden makeover! From drab to fab 🌿 #BalconyGarden #CityOasis</p>
              </div>
            </div>
            
            {/* <!-- Instagram Post 3 --> */}
            <div class="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-64 bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </div>
              <div class="p-4">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span class="text-gray-600 text-sm">312 likes</span>
                </div>
                <p class="text-gray-700 text-sm line-clamp-2">New arrival! This rare Monstera Albo has found its forever home with us. #RarePlants #PlantCollector</p>
              </div>
            </div>
            
            {/* <!-- Instagram Post 4 --> */}
            <div class="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-64 bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </div>
              <div class="p-4">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span class="text-gray-600 text-sm">208 likes</span>
                </div>
                <p class="text-gray-700 text-sm line-clamp-2">Herb garden essentials: Basil, thyme, and mint thriving in this kitchen window setup! #HerbGarden #FreshHerbs</p>
              </div>
            </div>
            
            {/* <!-- Instagram Post 5 --> */}
            <div class="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-64 bg-green-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="18" cy="6" r="1"></circle>
                </svg>
              </div>
              <div class="p-4">
                <div class="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span class="text-gray-600 text-sm">176 likes</span>
                </div>
                <p class="text-gray-700 text-sm line-clamp-2">Workshop day! Teaching our customers how to create and maintain their own terrarium. #PlantWorkshop #Terrarium</p>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
              Follow us on Instagram
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
  
        {/* <!-- Submit Your Project --> */}
        <div class="mt-16 bg-green-50 rounded-xl p-8 text-center">
          <h3 class="text-xl font-bold text-gray-800 mb-3">Share Your Green Space</h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">Proud of your plant-filled space? Submit photos of your balcony garden, indoor jungle, or any plant project for a chance to be featured in our gallery!</p>
          <button class="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition duration-300">
            Submit Your Photos
          </button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Service