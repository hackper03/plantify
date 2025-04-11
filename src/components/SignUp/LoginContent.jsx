import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LoginContent = () => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again later.");
      }
    };

  return (
    <form className="space-y-6 p-4" method="post" onSubmit={handleLogin}>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-500 font-medium mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white placeholder-white w-full px-4 py-2.5 bg-green-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="relative">
          <label
            htmlFor="password"
            className="block text-sm text-gray-500 font-medium mb-1"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-white placeholder-white w-full px-4 py-2.5 bg-green-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            id="toggle-password"
            className="absolute right-5 top-9 text-white focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
           {showPassword ? <FaEye className="h-5 w-5" /> : <FaEyeSlash className="h-5 w-5"/> }
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-0.5"
      >
        Login
      </button>

      <div className="relative flex items-center justify-center">
        <div className="h-px bg-gray-300 dark:bg-gray-600 w-full"></div>
        <div className="absolute bg-green-600 px-4 text-sm text-white">
          or continue with
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="py-2.5 px-4 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 flex justify-center items-center"
        >
          <svg
            className="h-5 w-5 mr-2"
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
          className="py-2.5 px-4 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 flex justify-center items-center"
        >
          <svg
            className="h-5 w-5 mr-2"
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

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
        >
          Sign in
        </a>
      </p>
    </form>
  );
};

export default LoginContent;
