import React from 'react'
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { MdMenu } from "react-icons/md";


export const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-none lg:bg-[url('map.jpeg')]">
        <div className='flex lg:justify-between cursor-pointer'>
        <div className='flex justify-center items-center borde w-16 h-12 lg:h-16'>
            <MdMenu size={28}/>
        </div>
        <div className='flex items-end lg:items-center justify-start lg:justify-center flex-col borde h-32 w-[400px] mt-1 mr-1'>
            <div className='flex-row flex items-center w-full lg:w-96 bg-white border-2 border-gray-100 rounded-3xl px-2'>
            <select
                name="bloodType"
                //value={}
                //onChange={}
                className="h-9 w-full lg:w-80 mt-1 block px-4 py-2 text-gray-700 rounded-md cursor-pointer
                         focus:outline-none  sm:text-sm"
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
            <label className="block text-2xl font-medium text-red-700"><MdBloodtype/> </label>
            </div>
            <div className='flex-row flex items-center w-full lg:w-96 bg-white border-2 border-gray-100 rounded-3xl px-2'>
              <input
                type="text"
                name="area"
                className="h-9 w-full lg:w-80 mt-1 block px-4 py-2 rounded-md placeholder-gray-500 sm:text-sm
                            focus:outline-none focus:ring-0 focus:border-transparent"
                placeholder="Enter Loc"
                required
              />
              <label className="block text-2xl font-medium text-red-700"><MdOutlineAddLocationAlt/> </label>
            </div>
            
        </div>
        </div>
    </div>
  )
}
