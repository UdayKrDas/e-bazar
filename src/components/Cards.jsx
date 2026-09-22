import React from 'react'

const Cards = (props) => {
  return (
    <div className=''>
        <div className='w-full bg-black/2 rounded-lg p-5 hover:bg-white/30 transtion-all ease-in-out duration-300 overflow-hidden flex-col items-center justify-center border  border-black/10 shadow-[2px_10px_0px_0_rgba(0,0,0,0.1)] hover:shadow-[6px_15px_0px_0_rgba(0,0,0,0.60)]'>
            <img src={props.img} className='w-60 hover:scale-110 ease-in-out duration-300 transtion-all object-fit'/>
            <h1 className='text-center font-semibold text-xl'>{props.name}</h1>
            <p className='text-center text-sm'>{props.desc}</p>
            <h2 className='text-center font-bold'>{props.disc}</h2>
        </div>
    </div>
  )
}

export default Cards