import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import cartImg from '../assets/desicartimg.png'
import cardLogos from '../assets/payment-logos.svg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='w-full text-[#FFF9F2] flex  bottom-0 bg-[#800020]'>
        <div className='w-full px-5 py-5'>
            <div className=' w-full justify-center flex gap-20'>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/terms-&-conditions'>Terms & Conditions</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/terms-&-conditions'>For Recruiters/HR</Link></li>
                </ul>
                <div>
                    <h1 className='font-bold text-center'>Connect with us</h1>
                    <ul className='flex items-center justify-center gap-1 py-0.5'>
                        <li className='hover:bg-[#F3E6D5] rounded hover:text-[#800020] transition-all duration-200 flex justify-center items-center cursor-pointer p-1 '><InstagramIcon/></li>
                        <li className='hover:bg-[#F3E6D5] rounded hover:text-[#800020] transition-all duration-200 flex justify-center items-center cursor-pointer p-1  '><XIcon/></li>
                        <li className='hover:bg-[#F3E6D5] rounded hover:text-[#800020] transition-all duration-200 flex justify-center items-center cursor-pointer p-1 '><FacebookIcon/></li>
                        <a 
                        href="https://www.linkedin.com/in/uday-kumar-das-7a14a0267/" target='_blank'
                        className='hover:bg-[#F3E6D5] rounded hover:text-[#800020] transition-all duration-200 flex justify-center items-center cursor-pointer p-1 '><LinkedInIcon/></a>
                    </ul>
                </div>
                <div>
                    <h1 className='font-medium'>Office Address</h1>
                    <p>Zoo Road, Guwahati <br /> Assam, India</p>
                </div>
                <div>
                    <h1 className='font-medium'>Website made by</h1>
                    <p>Uday Kumar Das</p>
                </div>
            </div>
            <hr className='text-white/30 p-2 mt-5'/>

            <div className='flex w-full justify-between items-center'>
                <Link to='/'>
                <div className='flex gap-2 items-center justify-between'>
                    <img src={cartImg} alt="" className='w-15' />
                    <h1 className='text-lg font-bold'>E-Bazaar</h1>
                
                </div>
                </Link>
                <div  className='flex gap-10 justify-around'>
                    <span>© 2026 E-Bazar</span>
                    <img src={cardLogos} className='w-80' alt="" />
                </div>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer