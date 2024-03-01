import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import DetailPost from './Pages/DetailPost'


const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<DetailPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
