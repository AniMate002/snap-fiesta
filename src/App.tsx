import React from "react";
import {Routes, Router, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import InspirationPage from "./Pages/InspirationPage";
import LayOut from "./Components/LayOut/LayOut";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { useEffect } from 'react'
import { fetchImages } from "./Redux/Slices/imageSlice";
import { useAppDispatch } from "./Redux/hooks";
import { createUser } from "./Redux/Slices/userSlice";
import AuthPage from "./Pages/AuthPage";


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchImages())
    // dispatch(createUser({
    //   "name": "Nicolas",
    //   "email": "nico@gmail.com",
    //   "password": "1234",
    //   "avatar": "https://picsum.photos/800",
    // }))
  }, [])
  
  return(
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />}/>
          <Route path="/inspiration" element={<InspirationPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App