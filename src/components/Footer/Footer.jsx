import React from "react";

const Footer = () => {
  return (

      <div id="root">
        <footer id="footer" class="bg-gray-900 text-white pt-16 pb-8">
          <div class="container mx-auto px-4">
            {/* <!-- Footer Top Section --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* <!-- Company Info --> */}
              <div>
                <div class="flex items-center mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-green-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M7 17.8C4.75 16.07 3 13.19 3 10c0-4.42 4.48-8 10-8s10 3.58 10 8-4.48 8-10 8c-1.22 0-2.39-.16-3.47-.46"></path>
                    <path d="M7 17.8L10.76 21"></path>
                    <path d="M12.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                  </svg>
                  <span class="text-2xl font-bold text-white">PlantOasis</span>
                </div>
                <p class="text-gray-400 mb-4">
                  Bringing nature into your urban spaces. We offer high-quality
                  plants and professional garden design services for all living
                  spaces.
                </p>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Twitter"
                    class="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    class="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    class="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    class="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Pinterest"
                    class="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* <!-- Quick Links --> */}
              <div>
                <h3 class="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h3>
                <ul class="space-y-2">
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#featured-products"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Shop Plants
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Garden Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#plant-care-tips"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Plant Care Tips
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Help & Support --> */}
              <div>
                <h3 class="text-lg font-semibold mb-4 text-white">
                  Customer Support
                </h3>
                <ul class="space-y-2">
                  <li>
                    <a
                      href="#faq"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Shipping Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Return Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      class="text-gray-400 hover:text-green-500 transition duration-300"
                    >
                      Contact Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Contact Info --> */}
              <div>
                <h3 class="text-lg font-semibold mb-4 text-white">
                  Contact Us
                </h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500 mr-3 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span class="text-gray-400">
                      123 Green Street, Plantville, NY 10001
                    </span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500 mr-3 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span class="text-gray-400">+1 (555) 123-4567</span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500 mr-3 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span class="text-gray-400">info@plantoasis.com</span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500 mr-3 mt-0.5"
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
                    <div class="text-gray-400">
                      <p>Monday - Friday: 9AM - 6PM</p>
                      <p>Saturday: 10AM - 5PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Newsletter --> */}
            <div class="border-t border-gray-800 pt-8 pb-10">
              <div class="max-w-xl mx-auto text-center">
                <h3 class="text-lg font-semibold mb-3 text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p class="text-gray-400 mb-5">
                  Stay updated with our latest plant collections, gardening
                  tips, and exclusive offers.
                </p>
                <form class="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    class="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* <!-- Payment Methods --> */}
            <div class="border-t border-gray-800 pt-8 pb-6">
              <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                  <h4 class="text-sm font-medium text-gray-400 mb-3">
                    Accepted Payment Methods
                  </h4>
                  <div class="flex space-x-4">
                    <div class="bg-gray-800 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-10 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    </div>
                    <div class="bg-gray-800 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-10 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <circle cx="9" cy="12" r="3" />
                        <circle cx="15" cy="12" r="3" />
                      </svg>
                    </div>
                    <div class="bg-gray-800 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-10 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                        <path d="M7 15h.01" />
                        <path d="M11 15h2" />
                      </svg>
                    </div>
                    <div class="bg-gray-800 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-10 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M17.4 9.358c0 -.967 .783 -1.75 1.75 -1.75s1.75 .783 1.75 1.75a1.75 1.75 0 1 1 -3.5 0z" />
                        <path d="M5.5 8.51c.797 -.065 1.6 .148 2.18 .572c.958 .63 1.257 1.43 2.066 1.652c.858 .222 1.804 -.148 2.316 -1.038c.425 -.738 1.163 -1.332 1.988 -1.286c.425 .027 .758 .14 1.282 .386c.775 .319 1.43 -.11 1.98 -.157c.593 -.048 1.032 .129 1.567 .493" />
                        <path d="M7 15h.01" />
                        <path d="M11 15h2" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="flex items-center">
                  <span class="text-gray-400 mr-2">Secure Checkout:</span>
                  <div class="flex space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M12 3c-7.2 0 -9 1.8 -9 9s1.8 9 9 9s9 -1.8 9 -9s-1.8 -9 -9 -9z"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"></path>
                      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Certifications --> */}
            <div class="border-t border-gray-800 pt-8 pb-6">
              <div class="flex flex-wrap justify-center gap-6">
                <div class="flex items-center">
                  <div class="bg-gray-800 p-2 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 22s8-4 8-10v-4.5L12 2L4 7.5V12c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-400 text-sm">Eco-Friendly</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-gray-800 p-2 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M9 13L4 8 9 3"></path>
                      <path d="M15 13l5-5-5-5"></path>
                      <path d="M12 21v-9"></path>
                      <path d="M6 17a6 6 0 0 0 12 0"></path>
                    </svg>
                  </div>
                  <span class="text-gray-400 text-sm">100% Organic</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-gray-800 p-2 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 22v-1"></path>
                      <path d="M12 3V2"></path>
                      <path d="M12 8V6"></path>
                      <path d="M12 16v-2"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-400 text-sm">
                    Sustainable Practices
                  </span>
                </div>
                <div class="flex items-center">
                  <div class="bg-gray-800 p-2 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M7 10v12"></path>
                      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                    </svg>
                  </div>
                  <span class="text-gray-400 text-sm">Quality Guarantee</span>
                </div>
              </div>
            </div>

            {/* <!-- Copyright and Bottom Links --> */}
            <div class="border-t border-gray-800 pt-8">
              <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="text-gray-400 text-sm mb-4 md:mb-0">
                  &copy; 2023 PlantOasis. All rights reserved.
                </div>
                <div class="flex flex-wrap justify-center gap-4">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-500 text-sm transition duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-500 text-sm transition duration-300"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-500 text-sm transition duration-300"
                  >
                    Shipping Policy
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-500 text-sm transition duration-300"
                  >
                    Refund Policy
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-green-500 text-sm transition duration-300"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Back to Top Button --> */}
            <div class="flex justify-center mt-8">
              <a
                href="#"
                class="bg-gray-800 hover:bg-gray-700 text-green-500 hover:text-green-400 rounded-full p-3 transition duration-300"
                aria-label="Back to top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Footer;
