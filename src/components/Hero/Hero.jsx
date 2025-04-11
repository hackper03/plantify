import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id="root">
      <section id="hero" class="relative bg-green-50 overflow-hidden">
        {/* <!-- Background decoration --> */}
        <div class="absolute top-0 right-0 -mt-20 -mr-20 lg:-mt-24 lg:-mr-24 text-green-100 opacity-50 transform rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-64 w-64 lg:h-96 lg:w-96" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 3a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H9a1 1 0 0 1 0-2h3V8a1 1 0 0 1 1-1z"/>
          </svg>
        </div>
        
        <div class="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div class="flex flex-col md:flex-row items-center">
            {/* <!-- Hero Content --> */}
            <div class="w-full md:w-1/2 md:pr-10 mb-10 md:mb-0 z-10">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight animate-fade-in">
                Bring Nature <span class="text-green-600">Inside</span> Your Home
              </h1>
              <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Transform your living space with our beautiful selection of indoor and outdoor plants. From tiny succulents to statement palms, we have the perfect green companion for you.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <Link to="/featured-products" class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 text-center">
                  Shop Plants
                </Link>
                <Link to="services" class="inline-block bg-white hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 rounded-lg border-2 border-green-600 transition duration-300 hover:shadow-md text-center">
                  Explore Services
                </Link>
              </div>
              
              <div class="flex items-center mt-10 space-x-4">
                <div class="text-sm">
                  <p class="font-semibold text-gray-800">Trusted by 5,000+ plant lovers</p>
                  <div class="flex text-yellow-400 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <!-- Hero Image --> */}
            <div class="w-full md:w-1/2 relative">
              <div class="relative rounded-lg overflow-hidden shadow-xl transform md:scale-110 lg:scale-105">
                {/* <!-- Plant image placeholder --> */}
                <div class="bg-green-200 h-80 md:h-96 lg:h-[500px] rounded-lg flex items-center justify-center relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-700/20"></div>
                  <div class="text-center z-10">
                    <div class="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg inline-block">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 mx-auto text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v8"></path>
                        <path d="M5 5.3C3.4 6.8 2.4 9 2.2 11.2c-.2 2.3.5 4.6 2.2 6.4 3.1 3.3 8.1 3.3 11.3 0 1.6-1.8 2.4-4.1 2.2-6.4C17.6 9 16.6 6.8 15 5.3L12 3"></path>
                        <path d="M12 22v-3"></path>
                      </svg>
                      <p class="text-green-800 font-medium mt-2">Plant imagery</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <!-- Floating badges --> */}
              <div class="absolute top-5 -left-2 md:top-10 md:-left-10 bg-white p-3 rounded-xl shadow-lg transform -rotate-6 animate-pulse">
                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span class="text-sm font-bold">Easy Care</span>
                </div>
              </div>
              
              <div class="absolute bottom-5 -right-2 md:bottom-10 md:-right-10 bg-white p-3 rounded-xl shadow-lg transform rotate-6 animate-pulse delay-300">
                <div class="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                  <span class="text-sm font-bold">Free Delivery</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- Bottom Wave Pattern --> */}
          <div class="absolute bottom-0 left-0 right-0 h-16 text-green-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-full">
              <path fill="currentColor" fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,181.3C320,181,400,203,480,218.7C560,235,640,245,720,224C800,203,880,149,960,128C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero