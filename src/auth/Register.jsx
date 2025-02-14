import React from 'react'

const Register = () => {
  return (
    <div className="flex h-screen">
    {/* Left Section */}
    <div className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">GoFinance</h1>
      <p className="text-lg mb-6">The most popular peer to peer lending at SEA</p>
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded-full transition-all">Read More</button>
    </div>
    
    {/* Right Section */}
    <div className="w-1/2 bg-white flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Hello!</h2>
      <p className="mb-8">Sign Up to Get Started</p>
      <form className="w-3/4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="UserName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  )
}

export default Register