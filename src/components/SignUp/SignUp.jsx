import React, { useState } from "react";
import LoginContent from "./LoginContent";
import SignUpContent from "./SignUpContent";

const SignUp = () => {
  const [caretab, setcaretab] = useState("SignUp");

  return (
    <section id="signup" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-stretch gap-12">
          {/* <!-- Left side: Form content -->  */}
          <div class="w-full lg:w-1/2">
            <div class="max-w-md mx-auto lg:mx-0">
              <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Create Your Account
              </h2>
              <p class="text-gray-500 mb-8">
                Join us to enjoy wishlist creation, easy checkout, and
                personalized shopping experiences.
              </p>
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 border-2">
                <div className="flex flex-wrap text-sm font-medium text-center border-b">
                  <button
                    className={`inline-block p-4 w-1/2 ${
                      caretab === "SignUp"
                        ? "text-green-600 bg-white border-b-2 border-green-600"
                        : "border-b text-gray-600 border-gray-200"
                    }  rounded-t-lg active`}
                    id="indoor-tab"
                    aria-selected="true"
                    onClick={() => {
                      setcaretab("SignUp");
                    }}
                  >
                    SignUp
                  </button>
                  <button
                    className={`inline-block p-4 w-1/2 ${
                      caretab === "Login"
                        ? "text-green-600 bg-white border-b-2 border-green-600"
                        : "border-b text-gray-600 border-gray-200"
                    }  rounded-t-lg active`}
                    id="outdoor-tab"
                    aria-selected="false"
                    onClick={() => {
                      setcaretab("Login");
                    }}
                  >
                    Login
                  </button>
                </div>
                {caretab === "SignUp" ? <SignUpContent /> : <LoginContent />}
              </div>
            </div>
          </div>

          {/* <!-- Right side: Benefits --> */}
          <div class="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div class="rounded-2xl p-8 shadow-lg animate__animated animate__fadeInRight bg-green-600">
              <h3 class="text-2xl font-bold text-gray-300 mb-6">
                Benefits of Creating an Account
              </h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium text-white">
                      Wishlist Management
                    </h4>
                    <p class="mt-1 text-white">
                      Save your favorite items for later and organize them in
                      personalized wishlists.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium text-gray-800 dark:text-white">
                      Faster Checkout
                    </h4>
                    <p class="mt-1 text-white">
                      Save your shipping and payment information for a quicker
                      checkout experience.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium text-gray-800 dark:text-white">
                      Saved Payment Methods
                    </h4>
                    <p class="mt-1 text-white">
                      Securely store your payment information for future
                      purchases.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium text-gray-800 dark:text-white">
                      Order History
                    </h4>
                    <p class="mt-1 text-white">
                      Track all your orders and access detailed purchase
                      history.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 mt-1">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-800/50 text-green-600 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium text-gray-800 dark:text-white">
                      Exclusive Notifications
                    </h4>
                    <p class="mt-1 text-white">
                      Get updates on sales, new products, and personalized
                      recommendations.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 bg-white dark:bg-neutral-700 p-4 rounded-lg border border-green-200 ">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h5 class="text-sm font-medium text-white">
                      Your Data is Safe
                    </h5>
                    <p class="text-xs text-white">
                      We use industry-standard encryption to protect your
                      personal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
