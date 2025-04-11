import React, { useContext } from 'react'
import ProductContent from '../context/ProductContent';

const ProducPage = () => {
  const { product } = useContext(ProductContent);
  return (
    <section id="product-details" class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* <!-- Product Images --> */}
        <div class="mb-8 lg:mb-0">
          <div class="relative">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022053.jpg" alt="Black and red Nike athletic shoe" class="w-full h-full object-cover" />
            </div>
            <span class="text-xs text-gray-500 mt-2 block">Photo by Mohammed Attia</span>
          </div>
          
          <div class="mt-4 grid grid-cols-4 gap-2">
            <button class="border-2 border-green-500 rounded-md overflow-hidden">
              <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022053.jpg" alt="Thumbnail of black and red Nike athletic shoe" class="w-full h-20 object-cover" />
            </button>
            <button class="border-2 border-gray-200 hover:border-green-500 rounded-md overflow-hidden transition-colors duration-200">
              <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022053.jpg" alt="Side view of black and red Nike athletic shoe" class="w-full h-20 object-cover" />
            </button>
            <button class="border-2 border-gray-200 hover:border-green-500 rounded-md overflow-hidden transition-colors duration-200">
              <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022053.jpg" alt="Back view of black and red Nike athletic shoe" class="w-full h-20 object-cover" />
            </button>
            <button class="border-2 border-gray-200 hover:border-green-500 rounded-md overflow-hidden transition-colors duration-200">
              <img src="https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022053.jpg" alt="Top view of black and red Nike athletic shoe" class="w-full h-20 object-cover" />
            </button>
          </div>
        </div>
        
        {/* <!-- Product Information --> */}
        <div class="lg:pl-8">
          <div class="mb-4">
            <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide">In Stock</span>
            <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">{product.name}</h1>
            <div class="mt-1 flex items-center">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg class="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="ml-2 text-sm text-gray-600">4.0 (128 reviews)</p>
            </div>
          </div>
          
          <div class="mt-8 mb-6">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-medium text-gray-900">Price</h2>
              <div>
                <p class="text-3xl font-bold text-gray-900">$149.99</p>
                <p class="text-sm text-gray-500 line-through">$179.99</p>
              </div>
            </div>
          </div>
          
          <div class="border-t border-b border-gray-200 py-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Select Size</h3>
            <div class="grid grid-cols-4 gap-2">
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 7</button>
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 7.5</button>
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 8</button>
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 8.5</button>
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 9</button>
              <button class="bg-green-500 text-white rounded-md py-2 px-2 text-sm border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 9.5</button>
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 10</button>
              <button class="bg-white text-gray-800 rounded-md py-2 px-2 text-sm border border-gray-300 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">US 10.5</button>
            </div>
            
            <h3 class="text-lg font-medium text-gray-900 mt-6 mb-4">Select Color</h3>
            <div class="flex space-x-3">
              <button class="h-8 w-8 bg-red-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"></button>
              <button class="h-8 w-8 bg-black rounded-full border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"></button>
              <button class="h-8 w-8 bg-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              <button class="h-8 w-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            </div>
          </div>
          
          <div class="mt-6">
            <div class="flex items-center mb-6">
              <label for="quantity" class="mr-4 text-sm font-medium text-gray-700">Quantity</label>
              <div class="flex items-center border border-gray-300 rounded-md">
                <button class="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500">-</button>
                <input type="number" id="quantity" name="quantity" min="1" value="1" class="w-12 text-center p-0 focus:outline-none focus:ring-0 border-0" />
                <button class="px-3 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500">+</button>
              </div>
            </div>
            
            <div class="flex sm:flex-row flex-col gap-4">
              <button class="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium flex-1 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200">
                Add to Cart
              </button>
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-md font-medium flex-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200">
                Buy Now
              </button>
            </div>
          </div>
          
          <div class="mt-8 space-y-4">
            <div class="flex">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <p class="ml-3 text-sm text-gray-700">Free shipping on orders over $100</p>
            </div>
            <div class="flex">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <p class="ml-3 text-sm text-gray-700">30-day easy returns</p>
            </div>
            <div class="flex">
              <svg class="flex-shrink-0 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <p class="ml-3 text-sm text-gray-700">2-year warranty included</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-- Product Description and Specs --> */}
      <div class="mt-16">
        <div class="border-b border-gray-200">
          <div class="flex -mb-px space-x-8 overflow-x-auto">
            <button id="tab-description" class="text-green-600 border-b-2 border-green-600 py-4 px-1 font-medium text-sm whitespace-nowrap focus:outline-none">Description</button>
            <button id="tab-features" class="text-gray-500 hover:text-gray-700 py-4 px-1 font-medium text-sm whitespace-nowrap focus:outline-none">Features &amp; Specs</button>
            <button id="tab-reviews" class="text-gray-500 hover:text-gray-700 py-4 px-1 font-medium text-sm whitespace-nowrap focus:outline-none">Reviews (128)</button>
            <button id="tab-shipping" class="text-gray-500 hover:text-gray-700 py-4 px-1 font-medium text-sm whitespace-nowrap focus:outline-none">Shipping &amp; Returns</button>
          </div>
        </div>
        
        <div id="description-content" class="py-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Nike Air Max Performance</h3>
          <div class="prose max-w-none text-gray-700">
            <p>The Nike Air Max Performance takes athletic footwear to 
the next level with its cutting-edge design and advanced technology. 
These shoes are engineered to provide ultimate comfort and support for 
all-day wear.</p>
            <p class="mt-4">Featuring Nike's signature Air cushioning in
 the heel, these shoes deliver responsive padding and impact protection.
 The breathable mesh upper keeps your feet cool during intense workouts,
 while the reinforced heel counter provides stability and support.</p>
            <p class="mt-4">Whether you're hitting the gym, going for a 
run, or simply looking for a stylish everyday sneaker, the Nike Air Max 
Performance delivers on all fronts.</p>
          </div>
        </div>
        
        <div id="features-content" class="py-6 hidden">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Features &amp; Specifications</h3>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Breathable mesh upper for enhanced ventilation</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Nike Air cushioning for responsive comfort</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Durable rubber outsole for excellent traction</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Padded collar and tongue for added comfort</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Reinforced heel counter for stability</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Weight: 10.5 oz (size 9)</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 h-5 w-5 text-green-500 flex items-center justify-center mr-2">✓</span>
              <span>Drop: 10mm (heel-to-toe)</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* <!-- Related Products --> */}
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img src="https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?cs=srgb&dl=pexels-elletakesphotos-2069425.jpg&fm=jpg" alt="Nike running shoe" class="h-48 w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Nike Air Zoom Pegasus</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">$129.99</p>
          </div>
          
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img src="https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?cs=srgb&dl=pexels-elletakesphotos-2069425.jpg&fm=jpg" alt="Nike basketball shoe" class="h-48 w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Nike LeBron 18</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">$199.99</p>
          </div>
          
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img src="https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?cs=srgb&dl=pexels-elletakesphotos-2069425.jpg&fm=jpg" alt="Nike casual shoe" class="h-48 w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Nike Air Force 1</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">$109.99</p>
          </div>
          
          <div class="group">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img src="https://images.pexels.com/photos/2069425/pexels-photo-2069425.jpeg?cs=srgb&dl=pexels-elletakesphotos-2069425.jpg&fm=jpg" alt="Nike training shoe" class="h-48 w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Nike Metcon 7</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">$139.99</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProducPage;