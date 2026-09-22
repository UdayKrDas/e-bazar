import React from 'react'
import { Link } from 'react-router-dom'

const FashionCard = (props) => {
  
  return (

    

    <Link to={`/products/${props.prodLink}`}>
      <div>
        <div className='bg-[#F3E6D5]/50 px-5 py-5 rounded-lg border border-black/10'>
            
            <div className='overflow-hidden flex w-80 h-90 items-center justify-center p-20 bg-white rounded-xl border border-black/5 mx-auto '>
                <img className=' w-200 h-300 object-contain hover:scale-110 transtion-all ease-in-out duration-300' src={props.fashImg} alt="" />
            </div>
            <h2>{props.prodName}</h2>
            <p>{props.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default FashionCard