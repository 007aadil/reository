import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // For generating user IDs

const statesWithDistricts = {
  TamilNadu: [
    "Ariyalur", "Chennai", "Coimbatore", "Dindigul", "Dharmapuri",
    "Erode", "Kallakurichi", "Kanyakumari", "Karur", "Krishnagiri",
    "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur",
    "Pudukkottai", "Ranipet", "Ramanathapuram", "Salem", "Sivaganga",
    "Thanjavur", "Theni", "Tiruchirappalli", "Tirunelveli", "Tiruvallur",
    "Tiruvannamalai", "Vellore", "Virudhunagar", "Thiruvarur", "Tenkasi", 
    "Tirupur", "Kanchipuram",
  ],
  Karnataka: [
    "Bagalkote", "Bangalore", "Belagavi", "Bellary", "Bidar",
    "Chikkaballapur", "Chikmagalur", "Chitradurga", "Dakshina Kannada",
    "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kodagu",
    "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara",
    "Shivamogga", "Tumkur", "Udupi", "Uttara Kannada", "Chamarajanagar"
  ],
  Maharashtra: [
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara",
    "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia",
    "Hingoli", "Jalna", "Jalgaon", "Kolhapur", "Latur", "Mumbai",
    "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad",
    "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri",
    "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
  ],
  // Add more states with their districts as needed
};

const DonorDetailsPage = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    bloodType: '',
    houseNumber: '',
    streetName: '',
    area: '',
    district: '',
    pincode: '',
    state: 'TamilNadu', // Default state
    country: 'India', // Set default country
    dateOfBirth: '',
    agreement: false,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [districts, setDistricts] = useState(statesWithDistricts[formData.state]); // Set initial districts
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // If the state changes, update the districts
    if (name === 'state') {
      setDistricts(statesWithDistricts[value]); // Update districts based on selected state
      setFormData((prevData) => ({
        ...prevData,
        district: '', // Reset district when state changes
      }));
    }
  };

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const age = calculateAge(formData.dateOfBirth);
    if (age < 18) {
      setErrorMessage('You must be above 18 to donate blood.');
      return;
    }

    if (!formData.agreement) {
      setErrorMessage('You must acknowledge that you are donating your blood with awareness.');                                        
      return;
    }

    // Generate a user ID
    const userId = uuidv4();

    // Mock submit - you can send this data to your backend
    console.log('Donor Data:', { ...formData, userId });

    // Navigate to a success or dashboard page after submission
    navigate('/donor-dashboard'); // Replace this with your desired route
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg overflow-hidden">
        <div className='flex flex-row justify-center mb-5 lg:gap-48 '>
          <div className='w-40 lg:w-80 h-10 lg:h-12 py-1 '>
            <h2 className="text-xl lg:text-3xl font-semibold text-red-600 mb-8">
            Donor
            </h2>
          </div>
          <div className='bg-red-600 text-white px-5 w-40 lg:w-80 h-10 lg:h-12 py-1 rounded-lg cursor-pointer 
          flex justify-center hover:border-2 hover:border-red-600 hover:bg-white hover:text-red-600 '
          onClick={()=>navigate('/acceptor-details')}>
            <h2 className="text-xl lg:text-3xl font-semibold  text-center mb-8">
              ACCEPTOR 
            </h2>
          </div>
        </div>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Blood Type</label>
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">House Number</label>
              <input
                type="text"
                name="houseNumber"
                value={formData.houseNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your house number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Street Name</label>
              <input
                type="text"
                name="streetName"
                value={formData.streetName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your street name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your area name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              >
                <option value="">Select your district</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your pincode"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              >
                <option value="TamilNadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                {/* Add more states here as needed */}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                required
              />
              <label className="ml-2 block text-sm font-medium text-gray-700">
                I acknowledge that I am above 18 and willing to donate blood.
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonorDetailsPage;



