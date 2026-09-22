import React, { useState } from 'react'
import cartImg from '../assets/desicartimg.png'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import PersonIcon from '@mui/icons-material/Person';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Closes dropdown when clicking anywhere outside
  const handleClickAway = () => {
    setIsOpen(false);
  };

  // Toggles state on click (opens, or closes if clicked twice)
  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  // Opens dropdown on hover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Closes dropdown when mouse moves completely out of the area
  const handleMouseLeave = () => {
    setIsOpen(false);
  };


  return (
    <div className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl'>
      <div className='font-poppins bg-white/40 backdrop-blur-lg border border-black/10 p-3 rounded-lg flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.09)] text-black'>
          <Link to='/'>
              <div className='flex gap-2 items-center hover:scale-x-105 transition-all duration-300'>
                  <img src={cartImg} alt="" className='w-15' />
                  <h1 className='text-lg text-black'>E-Bazar</h1>
              </div>
          </Link>
          <div>
            <input type="text" name="" id="" className='outline-none border border-black p-2 rounded-lg w-80 text-black' placeholder='search...'/>
          </div>
          <div className='flex items-center justify-between gap-2'>
            <Link to='/about'><span>About</span></Link>
            <div className='group w-full h-full'>
                <span className=''>Categories</span>
                <div className='absolute bg-white/95 backdrop-blur-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible border-black/10 top-full pt-2 rounded-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.09)] text-black -mx-2 z-50 transition-all duration-400 w-50'>
                  <div className='flex-col items-center p-2'>
                    <Link to='/fashion'><h2 className='p-2 hover:bg-[#F3E6D5] hover:p-3 tranition-all duration-200'>Fashion</h2></Link>
                    <Link to='/electronics'><h2 className='p-2 hover:bg-[#F3E6D5] hover:p-3 tranition-all duration-200'>Electronics</h2></Link>
                    <Link to='/groceries'><h2 className='p-2 hover:bg-[#F3E6D5] hover:p-3 tranition-all duration-200'>Groceries</h2></Link>
                  </div>
                </div>
              </div>
            <Link><ShoppingCartIcon/></Link>
            <div>
              <Show when="signed-out">
                <ClickAwayListener onClickAway={handleClickAway}>
              <div 
                className="relative inline-block py-2" // Vertical padding prevents hover gaps
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Trigger Area with Icon and Rotating Arrow */}
                <div 
                  onClick={handleIconClick}
                  className="flex items-center gap-1 text-[#D45060] hover:text-[#800020] cursor-pointer transition-colors"
                >
                  <PersonIcon fontSize="medium" />
                  
                  {/* Rotating Arrow Indicator */}
                  <KeyboardArrowDownIcon 
                    fontSize="small"
                    className={`transition-transform duration-1000 ease-in-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </div>

                  {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 top-full w-44 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </ClickAwayListener>
              </Show>
              <Show when="signed-in">
                <UserButton appearance={{
                elements: {
                  userButtonAvatarBox: "w-9 h-9 border border-gray-700 hover:scale-105 transition-transform"
                }
              }} />
              </Show>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar