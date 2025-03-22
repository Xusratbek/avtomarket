import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigatsiya uchun
import { notification } from 'antd'; // Ant Design bildirishnomasi uchun
import auth from '../../service/auth';

const Register = () => {
  const navigate = useNavigate();

  // Inputlar uchun state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Inputni yangilash funksiyasi
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Formani yuborish funksiyasi
  const handleSubmit = async (e) => {
    e.preventDefault(); // Formani qayta yuklanishidan saqlaydi
    try {
      const response = await auth.sign_up(formData);
      if (response.status === 201) {
        notification.success({
          message: 'Registration Successful',
          description: 'You have successfully registered.',
        });
        navigate('/'); // Bosh sahifaga yo‘naltirish
      }
    } catch (error) {
      console.log("Full API error:", error); // To‘liq xatoni chiqarish
      console.log("Error message:", error.message);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
        console.log("Response headers:", error.response.headers);
      } else if (error.request) {
        console.log("Request error:", error.request);
      } else {
        console.log("Config error:", error.config);
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">GoFinance</h1>
        <p className="text-lg mb-6">The most popular peer-to-peer lending at SEA</p>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-800 rounded-full transition-all">Read More</button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">Hello!</h2>
        <p className="mb-8">Sign Up to Get Started</p>
        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
  );
};

export default Register;
