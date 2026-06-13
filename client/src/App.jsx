import React from 'react'
import { Routes, Route } from "react-router-dom"
import AnaSehife from "./pages/AnaSehife"
import Xidmetler from "./pages/Xidmetler"
import Qiymetler from "./pages/Qiymetler"
import Portfolio from "./pages/Portfolio"
import Bloq from "./pages/Bloq"
import Elaqe from "./pages/Elaqe"
import Test from './companents/test'


const AppPage = () => {
  return (
    <Routes>
      <Route path='/' element={<AnaSehife/>}/>
      <Route path='Xidmetler' element={<Xidmetler/>}/>
      <Route path='Qiymetler' element={<Qiymetler/>}/>
      <Route path='Portfolio' element={<Portfolio/>}/>
      <Route path='Bloq' element={<Bloq/>}/>
      <Route path='Elaqe' element={<Elaqe/>}/>
    </Routes>
  )
}

export default AppPage