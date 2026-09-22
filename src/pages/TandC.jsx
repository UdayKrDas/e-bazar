import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TandC = () => {
  return (
    <div className=' w-250 flex justify-center font-poppins p-20 mx-auto -mt-15'>
      <div>
        <h1 className='font-semibold text-center p-5 text-3xl mb-10'>Terms & Conditions</h1>
        <p>Thanks a lot for reviewing the project</p>
        <br />
        <p>If you are a recruiter, I know it's hard to find good candidates to choose from in today's date, where everyone is generating websites with Ai, lot of people lack the fundamentals, aren't used to basic concepts, or only code with components and no idea to create them from scratch</p>
        <hr className='mt-5 mb-5' />
        <p><span className='font-medium text-2xl hover:p-5 hover:text-3xl duration-300 transition-all'>Worry not,</span> I might be the right candidate, but as every human has flaws, so do I. I might not know everything but I know quite a lot of things that I learnt while building projects, and I can guarantee, I'm really fast to adapt and always keen to learn new things</p>
        <br />
        <div className='group'>
          <h1 className='text-2xl font-bold mb-5 group'>So, should you blindly trust me and give me a Job ?</h1>
          <div>
            <h1 className='text-2xl font-bold -mt-18 absolute p-5 right-130 opacity-0 group-hover:opacity-100 group-hover:visible duration-400 z-50'>YES</h1>
          </div>
        </div>
        <p>Obv not lol, I'd love to attend an interview scheduled by you, and you can ask me anything about my projects or any questions you want, to qualify me as a candidate.</p>
        <br />
        <h1 className='text-2xl font-bold'>
          Where To Find Me ?
        </h1>
        <hr className='mb-5 mt-2'/>
        
        <div className='flex gap-2'>
          <a href="https://www.linkedin.com/in/uday-kumar-das-7a14a0267/" target='_blank'>
            <div className='bg-white flex justify-center w-50 rounded hover:p-8 duration-400 transition-all group'>
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

export default TandC