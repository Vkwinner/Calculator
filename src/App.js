import React, { useState } from 'react'
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <div>
    <Navbar />
    
    <About />
    </div>
  )
};