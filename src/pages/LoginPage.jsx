import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex">
      {/* Left Side: Company Info */}
      <div className="w-1/2 h-full bg-gradient-to-b from-blue-600 to-indigo-600 text-white flex flex-col justify-center items-start p-16">
        <h1 className="text-5xl font-bold mb-6">Employee Management System</h1>
        <p className="text-lg mb-4">
          Welcome to InnoTech IT Solutions! Our vision is to streamline HR
          processes, enhance productivity, and centralize employee data
          efficiently.
        </p>
        <p className="text-lg">
          Manage departments, employees, and roles seamlessly with our modern
          platform.
        </p>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 h-full flex justify-center items-center bg-gray-50">
        <div className="w-[400px] bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8">Login to Your Account</h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 border border-gray-300 rounded-xl px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 border border-gray-300 rounded-xl px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Login Button */}
          <button
            className="w-full h-12 bg-blue-600 text-white font-semibold rounded-xl mb-4 hover:bg-blue-700 transition cursor-pointer"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Login
          </button>

          {/* Google Login Button */}
          <button className="w-full h-12 flex items-center justify-center border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-100 transition cursor-pointer">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              fill="currentColor"
            >
              <path d="M488 261.8c0-17.4-1.5-34.1-4.3-50.3H249v95.3h135.1c-5.8 31.5-23.7 58.3-50.4 76.2v63.1h81.5c47.7-43.9 75.8-108.8 75.8-184.3zM249 8C111.6 8 0 119.6 0 256s111.6 248 249 248c135 0 247-111.2 247-248S384 8 249 8z" />
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
