import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import { GoogleLogin } from 'react-google-login'; // Import GoogleLogin component
import googleIcon from './assets/googleicon.jpg'; // Ensure this path is correct


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    try {
      const response = await axios.post('http://your-backend-api.com/login', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-lg">
        <h2 className="mt-6 text-center text-xl lg:text-3xl font-extrabold text-red-600">Blood Benefactors Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md"
          >
            Login
          </button>
        </form>

        
        <div className="mt-4">  
          <button
                className="w-full py-2 px-4 flex items-center justify-center border border-red-300 rounded-md text-red-500 
                hover:bg-red-500 hover:border-black hover:text-white">
                  <img src={googleIcon} alt="Google" className="h-6 w-6 mr-2 rounded-full" />
                  <span className="">Sign in with Google</span>
              </button>
        </div>

        <div className="flex justify-between items-center text-sm mt-4 flex-col lg:flex-row">
          <Link to="/password-recovery" className="text-red-500 hover:underline">
            Forgot password?
          </Link>
          <Link to="/signup" className="text-red-500 hover:underline">
            Don't have an account? Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
