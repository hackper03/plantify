import React from "react";
const SignUpContent = () => {
  return (
    <form class="space-y-6 p-4">
      <div class="space-y-4">
        <div>
          <label
            for="full-name"
            class="block text-sm text-gray-500 font-medium mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            class="text-white placeholder-white w-full px-4 py-2.5 bg-green-600 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-600 "
            placeholder="Enter your full name"
            required=""
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm text-gray-500 font-medium mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="text-white placeholder-white w-full px-4 py-2.5 bg-green-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 "
            placeholder="Enter your email"
            required=""
          />
        </div>

        <div class="relative">
          <label
            for="password"
            class="block text-sm text-gray-500 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="text-white placeholder-white w-full px-4 py-2.5 bg-green-600 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 "
            placeholder="Password"
            required=""
          />
          <button
            type="button"
            id="toggle-password"
            class="absolute right-3 top-8 text-gray-500 dark:text-gray-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="eye-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="relative">
          <label
            for="confirm-password"
            class="block text-sm text-gray-500 font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            class="text-white placeholder-white w-full px-4 py-2.5 bg-green-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 "
            placeholder="Confirm your password"
            required=""
          />
        </div>
      </div>

      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            required=""
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="terms" class="font-medium text-gray-600">
            I agree to the{" "}
            <a
              href="#"
              class="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              class="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              Privacy Policy
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-0.5"
      >
        Create Account
      </button>

      <div class="relative flex items-center justify-center">
        <div class="h-px bg-gray-300 dark:bg-gray-600 w-full"></div>
        <div class="absolute bg-green-600 px-4 text-sm text-white">
          or continue with
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <button
          type="button"
          class="py-2.5 px-4 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 flex justify-center items-center"
        >
          <svg
            class="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            ></path>
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            ></path>
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            ></path>
          </svg>
          Google
        </button>
        <button
          type="button"
          class="py-2.5 px-4 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 flex justify-center items-center"
        >
          <svg
            class="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
              fill="#1877F2"
            ></path>
          </svg>
          Facebook
        </button>
      </div>

      <p class="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          class="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
        >
          Sign in
        </a>
      </p>
    </form>
  );
};

export default SignUpContent;
