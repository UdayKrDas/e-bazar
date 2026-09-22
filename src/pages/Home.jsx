import React from 'react'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'

// Top Seller images 
import denimJacket from '../assets/prodImg/denimJacket.png'
import fridge from '../assets/prodImg/fridge.png'
import headphones from '../assets/prodImg/headphones.png'

// Fashion Models
import model1 from '../assets/fashionModels/model_01.png'
import model2 from '../assets/fashionModels/model_02.png'
import model3 from '../assets/fashionModels/model_03.png'
import model4 from '../assets/fashionModels/model_04.png'
import model5 from '../assets/fashionModels/model_05.png'
import model6 from '../assets/fashionModels/model_06.png'
import model7 from '../assets/fashionModels/model_07.png'
import model8 from '../assets/fashionModels/model_08.png'
import model9 from '../assets/fashionModels/model_09.png'
import model10 from '../assets/fashionModels/model_10.png'
import model11 from '../assets/fashionModels/model_11.png'
import model12 from '../assets/fashionModels/model_12.png'
import FashionCard from '../components/FashionCard'


export const fashModels = [
    {
      id:1,
      fashImg: model1,
      prodName: "Women's LongLine Overcoat",
      price: '₹2599',
      discount: '18'
    },
    {
      id:2,
      fashImg: model2,
      prodName: 'Slim-Fit Printed Pattern Shirt',
      price: '₹1599',
      discount: '15'
    },
    {
      id:3,
      fashImg: model3,
      prodName: 'Comfy Orange Midi Wrap Dress',
      price: '₹899',
      discount: '10'
    },
    {
      id:4,
      fashImg: model4,
      prodName: 'Premium Black Leather Jacket',
      price: '₹3999',
      discount: '5'
    },
    {
      id:5,
      fashImg: model5,
      prodName: 'Navy Blue Tailored Suit for Women',
      price: '₹2599',
      discount: '20'
    },
    {
      id:6,
      fashImg: model6,
      prodName: 'Warm off-white Turtle Neck',
      price: '₹999',
      discount: '20'
    },
    {
      id:7,
      fashImg: model7,
      prodName: 'Printed Cheetah-Print Ladies Bottom',
      price: '₹1599',
      discount: '9'
    },
    {
      id:8,
      fashImg: model8,
      prodName: 'Casual-fit Blue full-shirt',
      price: '₹1599',
      discount: '12'
    },
    {
      id:9,
      fashImg: model9,
      prodName: 'Ladies Sweet Heart Neckline Dress',
      price: '₹1599',
      discount: '15'
    },
    {
      id:10,
      fashImg: model10,
      prodName: 'Full Black Velvet Suite',
      price: '₹1599',
      discount: '5'
    },
    {
      id:11,
      fashImg: model11,
      prodName: 'Casual Grey Hoodie and Joggers Combo',
      price: '₹1599',
      discount: '17'
    },

  ]

// Understanding the code of [fashLink] for future - 
  // [...item] brings all the values from const fashModels

  // inside map function, we pass an object, where all the value goes and a new variable where we prepare our link for react router

  // then we use replace function where
  // /...../ the two slashes stands for a search tool just like "" but we can add a bit better conditions

  // \s stands for whitespace
  // + stands for if there are more than ones space like two-three space together, it will replace all of them, that is why instead of using replace(" ","-") we use this method 

  // the g at the end after /...../ stands for global flag which tells javascript "Don't stop at the first match—find and replace ALL matching spaces throughout the entire text."

export const fashLink = fashModels.map( (item)=>({
  ...item,
  prodLink: item.prodName.toLowerCase().replace(/'/g, "-").replace(/\s+/g, "-") 
}) )

const Home = () => {

  const CardInfo = [
    {
      img: denimJacket,
      name: 'Denim Jackets',
      desc: 'from Levi, Gucci etc.',
      disc: 'upto 20% OFF'
    },
    {
      img: fridge,
      name: 'Refrigerators',
      desc: 'from Samsung, LG etc.',
      disc: 'flat 5% OFF'
    },
    {
      img: headphones,
      name: 'Headphones',
      desc: 'from Sony, Apple, Bose etc.',
      disc: 'upto 10% OFF'
    },
  ]

  

  return (
    <div className='p-2 max-w-full'>

      {/* Hero Section  */}
      <div className="flex items-start w-full">
        <Carousel />
        <div className='w-full text-center flex-col justify-center items-center'>
          <h1 className='text-2xl' >Winter Offer</h1>
          <h1 className="font-bold text-[100px] hover:text-[150px] transition-all ease-in-out duration-700 mt-5">20% OFF</h1>
          <h1 className='text-2xl '>on your Favourite brands</h1>
          <hr className='p-2 mt-2' />
          <h1 className='font-semibold p-2 flex items-center justify-center gap-1'>USE CODE: <span className='font-bold rounded hover:bg-[#800020] px-2 py-1 hover:text-white transition-all ease-in-out duration-500'>WINTER-20</span></h1>
        </div>
      </div>

      {/* Top Seller Card  */}
      <div className='w-400 mx-auto bg-white p-2 rounded-lg'>
        <h1 className='text-center font-semibold text-2xl py-2'>Top Sellers</h1>
        <div className="flex items-center justify-center gap-5 p-5 mt-0 m-5 bg-[#FFF9F2] rounded-lg  ">
          {CardInfo.map((e, i) => (
            <Cards 
            key={i}
            img={e.img}
            name={e.name}
            desc={e.desc}
            disc={e.disc}
            />
          ))}
        </div>
      </div>

      {/* Fashion Card  */}
      <div className=' bg-white p-2 rounded-lg mt-2'>
        <h1 className='text-center font-semibold text-2xl py-2'>Level Up your Fashion</h1>
        <div className="grid grid-cols-4 gap-5">
          {fashLink.map( (fashion) => (
            <FashionCard
            key={fashion.id}
            fashImg={fashion.fashImg}
            prodName={fashion.prodName}
            price={fashion.price}
            prodLink={fashion.prodLink}
            />
          ) )}
        </div>
      </div>


    </div>
  )
}

export default Home