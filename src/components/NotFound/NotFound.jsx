import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";

const NotFound = () => {
  return (
   <section class="bg-green-600 ">
    <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div class="flex flex-col items-center max-w-sm mx-auto text-center">
            <p class="p-3 text-sm font-medium text-green-600 rounded-full bg-blue-50 ">
                <IoMdInformationCircle class="w-6 h-6"/>
            </p>
            <h1 class="mt-3 text-2xl text-white font-semibold text- md:text-3xl">Page not found</h1>
            <p class="mt-4 text-white ">The page you are looking for doesn't exist. Here are some helpful links:</p>

            <div class="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button class="flex items-center justify-center w-1/2 text-sm px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-green-50 transition duration-300 whitespace-nowrap">
                <FaArrowCircleLeft class="w-6 h-6"/>
                    <span>Go back</span>
                </button>

                <button class="px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-green-50 transition duration-300 whitespace-nowrap">
                    Take me home
                </button>
            </div>
        </div>
    </div>
</section>
  );
};

export default NotFound;
