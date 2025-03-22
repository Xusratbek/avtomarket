import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Formani qayta yuklanishidan saqlaydi

    try {
      const response = await fetch('https://carsales-iysh.onrender.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        window.location.href = '/dashboard'; // Muvaffaqiyatli login bo‘lsa, yo‘naltirish
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col justify-center items-center text-white p-12">
        <h1 className="text-5xl font-bold mb-6">GoFinance</h1>
        <p className="text-lg mb-10">The most popular peer-to-peer lending at SEA</p>
        <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-12">
        <h2 className="text-4xl font-bold mb-4">Hello Again!</h2>
        <p className="text-gray-600 mb-8">Welcome Back</p>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
          <p className="text-center text-gray-600 mt-4 hover:underline cursor-pointer">
            Forgot Password
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
