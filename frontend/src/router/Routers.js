import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import About from '../pages/About'
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResult from './../pages/SearchResult';
import PaymentPage from '../pages/Payment';
import ThankYou from '../pages/ThankYou';
const Routers = () => {
  return (
     <Routes>
        <Route path='/' element ={<Navigate to='/home'/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/tours' element={<Tours/>}/>
     <Route path='/tours/:id' element={<TourDetails/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/thank-you' element={<ThankYou/>}/>
     <Route path="/payment" element={<PaymentPage />} />
     <Route path='/tours/search' element={<SearchResult/>}/>

     </Routes>
    )
}

export default Routers;