import React from "react";

const GalleryCard = (props) => {
  return (
    <div class="relative group overflow-hidden rounded-lg shadow-md h-64">
      <div class="absolute inset-0 bg-green-200 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8l-8.2-1.8a.5.5 0 0 0-.5.8l5 5-5.2 5.2a.5.5 0 0 0 0 .7l.7.7c.2.2.5.2.7 0L10.7 14l5 5c.4.4 1 .3.8-.2Z"></path>
        </svg>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 class="text-white font-semibold">{props.name}</h3>
        <p class="text-white text-sm">
            {props.description}
        </p>
      </div>
      <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300"
          aria-label="View details"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
