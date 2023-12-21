import React from "react";
import {Routes, Router, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import InspirationPage from "./Pages/InspirationPage";
import LayOut from "./Components/LayOut/LayOut";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { useEffect } from 'react'
import { fetchImages, searchImages } from "./Redux/Slices/imageSlice";
import { useAppDispatch } from "./Redux/hooks";
import { createUser } from "./Redux/Slices/userSlice";
import AuthPage from "./Pages/AuthPage";
import MyProfilePage from "./Pages/MyProfilePage";
import ArtistsPage from "./Pages/ArtistsPage";
import HashTagsPage from "./Pages/HashTagsPage";
import 'swiper/css';


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchImages(1))
  // }, [dispatch])
  
  return(
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomePage />}/>
          <Route path="/inspiration" element={<InspirationPage />}/>
          <Route path="/myprofile" element={<MyProfilePage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/hashtags" element={<HashTagsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App