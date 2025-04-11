import React from 'react'
import { GiFertilizerBag, GiPlantWatering } from 'react-icons/gi'
import { PiSunLight } from 'react-icons/pi'
import { WiHumidity } from 'react-icons/wi'

const TabContent = () => {
  return (
    <div class="p-6 md:p-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="order-2 md:order-1">
                  <h3 class="text-xl font-semibold text-gray-800 mb-4">
                    Essential Indoor Plant Care
                  </h3>
                  <div class="space-y-5">
                    <div class="flex items-start">
                      <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <GiPlantWatering className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800 mb-1">Watering</h4>
                        <p class="text-gray-600 text-sm">
                          Most indoor plants need watering when the top 1-2
                          inches of soil feels dry to the touch. Avoid
                          overwatering, which is a common cause of plant death.
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start">
                      <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <PiSunLight class="h-5 w-5 text-green-600"/>
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800 mb-1">Light</h4>
                        <p class="text-gray-600 text-sm">
                          Most houseplants prefer bright, indirect light. Direct
                          sunlight can scorch leaves, while insufficient light
                          leads to leggy growth and fewer leaves.
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start">
                      <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <WiHumidity class="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800 mb-1">Humidity</h4>
                        <p class="text-gray-600 text-sm">
                          Tropical plants thrive in higher humidity. Use a
                          humidifier, group plants together, or place them on
                          pebble trays filled with water to increase moisture
                          levels.
                        </p>
                      </div>
                    </div>

                    <div class="flex items-start">
                      <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <GiFertilizerBag  class="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 class="font-medium text-gray-800 mb-1">
                          Fertilizing
                        </h4>
                        <p class="text-gray-600 text-sm">
                          Feed your plants with a balanced, water-soluble
                          fertilizer at half strength every 4-6 weeks during the
                          growing season (spring and summer).
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    class="inline-flex items-center mt-6 text-green-600 hover:text-green-700 font-medium"
                  >
                    Read our complete indoor plant guide
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

    
                <div class="order-1 md:order-2 bg-green-100 rounded-xl p-6 flex items-center justify-center">
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-28 w-28 text-green-600 mx-auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                    <p class="mt-4 text-green-800 font-medium">
                      Learn to care for your indoor plants
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TabContent