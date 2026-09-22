import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import mensFashion from '../assets/heroImages/01_mens_fashion.png'
import techGadgets from '../assets/heroImages/02_tech_gadgets.png'
import homeLiving from '../assets/heroImages/03_home_living.png'
import sportsFitness from '../assets/heroImages/04_sports_fitness.png'
import accessories from '../assets/heroImages/05_accessories.png'
import specialOffers from '../assets/heroImages/06_special_offers.png'

const heroImages = [mensFashion, techGadgets, homeLiving, sportsFitness, accessories, specialOffers]

const Carousel = () => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? heroImages.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === heroImages.length - 1 ? 0 : curr + 1))

  const autoSlide = true
  const autoSlideInterval = 5000

  useEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === heroImages.length - 1 ? 0 : curr + 1))
    }, autoSlideInterval)

    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className='w-full max-w-4xl  p-2'>
      <div className="overflow-hidden relative w-full flex rounded-2xl">
        <div
          className='flex transition-transform ease-out duration-500 w-full'
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {heroImages.map((img, idx) => (
            <div key={idx} className='w-full shrink-0 overflow-hidden group'>
              <img 
                src={img} 
                className='w-full h-auto object-cover transition-transform duration-300  ease-in-out group-hover:scale-105'
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className='absolute inset-0 flex items-center justify-between p-2 pointer-events-none '>
          <button 
            onClick={prev}
            className='pointer-events-auto flex items-center text-xl p-1 rounded-full shadow bg-white/80 hover:bg-white text-gray-800'
          >
            <ChevronLeftIcon fontSize='inherit'/>
          </button>
          <button
            onClick={next}
            className='pointer-events-auto flex items-center text-xl p-1 rounded-full shadow bg-white/80 hover:bg-white text-gray-800'
          >
            <ChevronRightIcon fontSize='inherit'/>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {heroImages.map((_, i) => (
              <div 
                key={i}
                className={`transition-all w-1 h-1 bg-white rounded-full ${curr === i ? 'p-1 bg-opacity-100 w-1.5' : 'bg-opacity-50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel