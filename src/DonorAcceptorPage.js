import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const DonorAcceptorPage = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);

    // Redirect based on the role
    ; // Adjust this route to your actual donor dashboard
    if (selectedRole === 'donor') {
        navigate('/donor-details'); // Navigate to the donor details page
      }
       else if (selectedRole === 'acceptor') {
      navigate('/acceptor-details'); // Adjust this route to your actual acceptor dashboard
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-extrabold text-red-600 text-center mb-8">Are you a Donor or  an Acceptor?</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleRoleSelection('donor')}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            I'm a Donor
          </button>
          <button
            onClick={() => handleRoleSelection('acceptor')}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            I'm an Acceptor
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorAcceptorPage;
