import React from "react";
import {Routes, Router, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import InspirationPage from "./Pages/InspirationPage";
import LayOut from "./Components/LayOut/LayOut";

import { useEffect } from 'react'
import { fetchImages } from "./Redux/Slices/imageSlice";
import { useAppDispatch } from "./Redux/hooks";


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchImages())
  }, [])
  
  return(
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />}/>
          <Route path="/inspiration" element={<InspirationPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App