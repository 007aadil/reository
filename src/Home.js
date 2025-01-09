import React from 'react'
import blood from './assets/blood.jpg'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const nav=useNavigate()
 
  return (
    <div className='bg-red-700 min-h-screen w-full flex justify-center items-center'>
        {/* <img src={blood} alt="bl" className="lg:min-h-screen lg:w-full" /> */}
        <div className='flex justify-center items-center rounded-full border-2 border-red-700
        w-52 lg:w-72 h-12 lg:h-16 text-xl lg:text-2xl text-red-600 font-normal bg-black cursor-pointer
        hover:text-black hover:bg-red-600 hover:border-black'
        onClick={()=> nav('/loginpage')}>
            <h2>REGISTER | LOGIN </h2>
        </div>
    </div>
  )
}

export default Home