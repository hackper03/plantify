import React from 'react'

const Contact = () => {
  return (
 

    <div id="root">
      <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
          {/* <!-- Section Header --> */}
          <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p class="text-gray-600">Have questions about our plants or services? Get in touch with our team and we'll be happy to help.</p>
          </div>
    
          <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div class="flex flex-col lg:flex-row">
              {/* <!-- Contact Form --> */}
              <div class="lg:w-2/3 p-6 md:p-10">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                <form class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="first-name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" id="first-name" name="first-name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label for="last-name" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" id="last-name" name="last-name" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" id="email" name="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your email address" required />
                    </div>
                    <div>
                      <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Your phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select id="subject" name="subject" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                      <option value="" disabled selected>Select a subject</option>
                      <option value="order-inquiry">Order Inquiry</option>
                      <option value="plant-care">Plant Care Questions</option>
                      <option value="garden-service">Balcony Garden Services</option>
                      <option value="product-availability">Product Availability</option>
                      <option value="returns">Returns & Refunds</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <div class="flex items-start">
                    <input id="newsletter" name="newsletter" type="checkbox" class="h-4 w-4 mt-1 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                    <label for="newsletter" class="ml-2 block text-sm text-gray-700">
                      I'd like to receive updates on new products, exclusive offers, and plant care tips.
                    </label>
                  </div>
                  
                  <button type="submit" class="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 2L11 13"></path>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* <!-- Contact Info --> */}
              <div class="lg:w-1/3 bg-green-50 p-6 md:p-10">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="bg-white rounded-full p-2 shadow-sm mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-800 mb-1">Visit Us</h4>
                      <p class="text-gray-600 text-sm">123 Green Street, Plantville</p>
                      <p class="text-gray-600 text-sm">New York, NY 10001</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-white rounded-full p-2 shadow-sm mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-800 mb-1">Call Us</h4>
                      <p class="text-gray-600 text-sm">+1 (555) 123-4567</p>
                      <p class="text-gray-600 text-sm">Mon-Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-white rounded-full p-2 shadow-sm mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-800 mb-1">Email Us</h4>
                      <p class="text-gray-600 text-sm">info@plantoasis.com</p>
                      <p class="text-gray-600 text-sm">support@plantoasis.com</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start">
                    <div class="bg-white rounded-full p-2 shadow-sm mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-medium text-gray-800 mb-1">Opening Hours</h4>
                      <p class="text-gray-600 text-sm">Monday - Friday: 9AM - 6PM</p>
                      <p class="text-gray-600 text-sm">Saturday: 10AM - 5PM</p>
                      <p class="text-gray-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div class="mt-10">
                  <h4 class="font-medium text-gray-800 mb-3">Follow Us</h4>
                  <div class="flex space-x-4">
                    <a href="#" class="bg-white hover:bg-gray-100 text-green-600 rounded-full p-2 shadow-sm transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </a>
                    <a href="#" class="bg-white hover:bg-gray-100 text-green-600 rounded-full p-2 shadow-sm transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                    <a href="#" class="bg-white hover:bg-gray-100 text-green-600 rounded-full p-2 shadow-sm transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                    <a href="#" class="bg-white hover:bg-gray-100 text-green-600 rounded-full p-2 shadow-sm transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a href="#" class="bg-white hover:bg-gray-100 text-green-600 rounded-full p-2 shadow-sm transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- Map Section --> */}
          <div class="mt-16 max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-1/2 p-6 md:p-10">
                <h3 class="text-2xl font-bold text-gray-800 mb-6">Find Us</h3>
                <p class="text-gray-600 mb-6">Visit our store to explore our plant collection in person and get expert advice from our team.</p>
                
                <div class="flex items-center mb-4">
                  <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">Address</h4>
                    <p class="text-gray-600 text-sm">123 Green Street, Plantville, NY 10001</p>
                  </div>
                </div>
                
                <div class="space-y-3 mb-6">
                  <div class="flex items-center">
                    <div class="w-3 h-3 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span class="text-gray-600 text-sm">Subway: Green Line - Plantville Station (2 blocks away)</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-3 h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span class="text-gray-600 text-sm">Bus: Route 42 - Green Street Stop (directly in front)</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span class="text-gray-600 text-sm">Parking: Available in the rear of the building</span>
                  </div>
                </div>
                
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <div class="md:w-1/2 bg-gray-200 h-72 md:h-auto relative flex items-center justify-center">
                {/* <!-- Map Placeholder --> */}
                <div class="text-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.5 6.5 8 16"></path>
                    <path d="M4.5 8.5c0-1 .626-2.251 1.76-3.383C7.389 4 9.171 3 10.5 3c2.333 0 4 2.333 4 2.333s1.667-.333 3 .667c1.333 1 1.333 2.333 1.333 2.333s-.889 1.556-1.556 2.223c-.521.521-1.278 1.037-2.184 1.482a7.586 7.586 0 0 1-1.732.647c-.993.235-1.861.235-2.361.235-2.333 0-5-2.11-5-2.11S3.5 12.5 3.5 11L5 9.5"></path>
                    <path d="M3.5 14.5c0 2.5 2 4.5 4.5 4.5s4-1.5 4-1.5 2 1.5 4.5 1.5 4.5-2 4.5-4.5-2-3-2-3"></path>
                  </svg>
                  <p class="text-gray-500 mb-4">Interactive map would be displayed here</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Open in Google Maps
                  </a>
                </div>
                
                {/* <!-- Location Pin Overlay --> */}
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div class="relative">
                    <div class="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-green-400 opacity-75"></div>
                    <div class="relative inline-flex rounded-full h-6 w-6 bg-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- Quick Contact Options --> */}
          <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-green-50 rounded-xl p-6 text-center hover:shadow-md transition duration-300">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p class="text-gray-600 mb-4">Chat with our plant experts in real-time for immediate assistance.</p>
              <a href="#" class="inline-block text-green-600 hover:text-green-700 font-medium">Start Chat</a>
            </div>
            
            <div class="bg-green-50 rounded-xl p-6 text-center hover:shadow-md transition duration-300">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Email Support</h3>
              <p class="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
              <a href="mailto:support@plantoasis.com" class="inline-block text-green-600 hover:text-green-700 font-medium">support@plantoasis.com</a>
            </div>
            
            <div class="bg-green-50 rounded-xl p-6 text-center hover:shadow-md transition duration-300">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Phone Support</h3>
              <p class="text-gray-600 mb-4">Call our customer service line for direct assistance.</p>
              <a href="tel:+15551234567" class="inline-block text-green-600 hover:text-green-700 font-medium">+1 (555) 123-4567</a>
            </div>
          </div>
          
          {/* <!-- FAQ Link --> */}
          <div class="mt-16 text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Have Common Questions?</h3>
            <p class="text-gray-600 mb-4">Check our Frequently Asked Questions for quick answers to common inquiries.</p>
            <a href="#faq" class="inline-flex items-center bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-6 rounded-lg transition duration-300">
              Visit FAQ Section
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact