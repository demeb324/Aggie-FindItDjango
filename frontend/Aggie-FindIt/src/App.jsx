import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        {/* Add more routes as needed */}
        {/* Example: <Route path="register" element={<Register />} /> */}
      </Route>
    </Routes>
  )
}

export default App
