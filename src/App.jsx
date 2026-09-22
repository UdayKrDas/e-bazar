import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home, {fashLink} from './pages/Home'
import { SignIn, SignUp } from '@clerk/react'
import Footer from './components/Footer'
import About from './pages/About'
import TandC from './pages/TandC'
import Contact from './pages/Contact'
import FashionCard from './components/FashionCard'
import ProdPage from './components/ProdPage'
import ComingSoon from './components/ComingSoon'
import Login from './pages/Login'
import SignUpBro from './pages/SignUpBro'

const App = () => {
  


  return (
    <div className=''>
      <Navbar/>
      <div className="pt-28">
        <Routes>
          <Route path='/' element={
            <>
            <Home/>
            </>
        }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sign-up' element={<SignUpBro/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/terms-&-conditions' element={<TandC/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/groceries' element={<ComingSoon/>}/>
          <Route path='/electronics' element={<ComingSoon/>}/>
          <Route path='/fashion' element={<ComingSoon/>}/>
          
          <Route path="/products/:prodLink" element={<ProdPage />} />
        </Routes>
        <Footer/>
      </div>
    
    
    </div>
  )
}

export default App