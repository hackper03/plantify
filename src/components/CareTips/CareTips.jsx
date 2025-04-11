import React, { useState } from "react";
import TabContent from "./TabContent";
import PlantCareCard from "./PlantCareCard";
import PlantCareNewsLetter from "./PlantCareNewsLetter";

const CareTips = () => {
  const [caretab, setcaretab] = useState("Indoor")
  return (
      <section id="plant-care-tips" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Plant Care Tips
            </h2>
            <p className="text-gray-600">
              Learn how to keep your plants healthy and thriving with our expert
              care guides and tips.
            </p>
          </div>

          {/* <!-- Plant Care Tabs --> */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="flex flex-wrap text-sm font-medium text-center border-b">
              <button
                className={`inline-block p-4 min-w-[120px] ${caretab === "Indoor" ? "text-green-600 bg-white border-b-2 border-green-600" : "border-b text-gray-600 border-gray-200" }  rounded-t-lg active`}
                id="indoor-tab"
                aria-selected="true"
                onClick={() => {setcaretab("Indoor")}}
              >
                Indoor Plants
              </button>
              <button
                className={`inline-block p-4 min-w-[120px] ${caretab === "Outdoor" ? "text-green-600 bg-white border-b-2 border-green-600" : "border-b text-gray-600 border-gray-200" }  rounded-t-lg active`}
                id="outdoor-tab"
                aria-selected="false"
                onClick={() => {setcaretab("Outdoor")}}
              >
                Outdoor Plants
              </button>
              <button
                className={`inline-block p-4 min-w-[120px] ${caretab === "Succulents" ? "text-green-600 bg-white border-b-2 border-green-600" : "border-b text-gray-600 border-gray-200" }  rounded-t-lg active`}
                id="succulents-tab"
                aria-selected="false"
                onClick={() => {setcaretab("Succulents")}}
              >
                Succulents
              </button>
              <button
                className={`inline-block p-4 min-w-[120px] ${caretab === "Seasonal" ? "text-green-600 bg-white border-b-2 border-green-600" : "border-b text-gray-600 border-gray-200" }  rounded-t-lg active`}
                id="seasonal-tab"
                aria-selected="false"
                onClick={() => {setcaretab("Seasonal")}}
              >
                Seasonal Care
              </button>
            </div>

            {/* <!-- Tab Content - Indoor Plants --> */}
            <TabContent />
          </div>

          {/* <!-- Plant Care Cards --> */}
         <PlantCareCard />

          {/* <!-- Care Video Section --> */}
          <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6 md:p-8 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Plant Care Video Tutorials
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Watch our expert gardeners demonstrate essential plant care
                    techniques in these easy-to-follow video tutorials.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-gray-700">
                        How to Repot Your Plants
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-gray-700">
                        Proper Watering Techniques
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-600 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span className="text-gray-700">
                        Pruning for Plant Health
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                  >
                    View All Tutorials
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 bg-green-100 min-h-[300px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <p className="text-green-800 font-medium">
                    Video Tutorial Preview
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Plant Care Newsletter --> */}
         <PlantCareNewsLetter />
        </div>
      </section>
  );
};

export default CareTips;
