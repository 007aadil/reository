import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const statesWithDistricts = {
  TamilNadu: [
    "Ariyalur", "Chennai", "Coimbatore", "Dindigul", "Dharmapuri", "Erode",
    "Kallakurichi", "Kanyakumari", "Karur", "Krishnagiri", "Madurai",
    "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
    "Ranipet", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur",
    "Theni", "Tiruchirappalli", "Tirunelveli", "Tiruvallur", "Tiruvannamalai",
    "Vellore", "Virudhunagar", "Thiruvarur", "Tenkasi", "Tirupur",
    "Kanchipuram"
  ],
  // Add more states if needed
};

const AcceptorDetailsPage = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    houseNumber: '',
    streetName: '',
    area: '',
    district: '',
    state: 'TamilNadu',
    pincode: '',
    country: 'India',
    proof: null,
    acknowledgement: false,
  });

  const [districts, setDistricts] = useState(statesWithDistricts[formData.state]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'state') {
      setDistricts(statesWithDistricts[value]);
      setFormData((prevData) => ({
        ...prevData,
        district: '',
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      proof: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Acceptor Data:', formData);
    navigate('/acceptor-dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg overflow-hidden">
      <div className='flex flex-row justify-center mb-5 lg:gap-48'>
        <div className='bg-red-600 px-5 w-40 lg:w-80 h-10 lg:h-12 py-1 rounded-lg cursor-pointer text-white
        flex justify-center hover:border-2 hover:border-red-600 hover:bg-white hover:text-red-600'
          onClick={()=>navigate('/donor-details')}>
          <h2 className="text-xl lg:text-3xl font-semibold  text-center mb-8">
          DONOR 
          </h2>
        </div>
        <div className='w-40 lg:w-80 h-10 lg:h-12 py-1'>
          <h2 className="text-xl lg:text-3xl font-semibold text-red-600 text-end mb-8">
          Acceptor 
          </h2>
        </div>
        </div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {/* Add more states as needed */}
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
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your country"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Proof of Need</label>
              <input
                type="file"
                name="proof"
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="acknowledgement"
                checked={formData.acknowledgement}
                onChange={handleChange}
                className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                required
              />
              <label className="ml-2 block text-sm font-medium text-gray-700">
                I acknowledge that I am truly in need of a blood donor.
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

export default AcceptorDetailsPage;








