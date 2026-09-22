import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Contact = () => {
  return (
     <div className='h-130 font-poppins w-200 mx-auto'>
      <h2 className='text-5xl font-bold text-center mb-2'>Contact</h2>
      <hr className='mb-5'/>
      <div className='flex justify-center font-poppins p-20 mx-auto -mt-15'>
      <div className='flex gap-2 scale-200'>
          <a href="https://www.linkedin.com/in/uday-kumar-das-7a14a0267/" target='_blank'>
            <div className='bg-white flex justify-center w-50 rounded hover:p-8 duration-400 transition-all group hover:mt-10'>
              <div className='w-15 flex justify-center items-center cursor-pointer text-6xl group-hover:text-white group-hover:bg-black group-hover:scale-120 rounded duration-900 transition-all'><LinkedInIcon fontSize='inherit' className='' /></div>
            </div>
          </a>
          <div className='flex items-center'>
            <ArrowBackIcon/>
            <h2 className='text-xl '>Click here</h2>
          </div>
      </div>
     </div>
     </div>
  )
}

export default Contact