import React from 'react'
import { SignIn, SignUp } from '@clerk/react'
import cartImg from '../assets/desicartimg.png'

const Login = () => {
  return (
    <div className='flex w-250 justify-center mx-auto mb-20'>
        <SignIn/>
        <div className='flex gap-2 items-center scale-250 mx-50'>
            <img src={cartImg} alt="" className='w-15' />
            <h1 className='text-lg font-bold'>E-Bazaar</h1>
                        
        </div>
        
    </div>
  )
}

export default Login