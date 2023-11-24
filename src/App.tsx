import React from "react";
import {Routes, Router, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import InspirationPage from "./Pages/InspirationPage";
import LayOut from "./Components/LayOut/LayOut";

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
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />}/>
          <Route path="/inspiration" element={<InspirationPage />}/>
          <Route path="/auth/:type" element={<AuthPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App