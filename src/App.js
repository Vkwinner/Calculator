import React, { useState } from 'react'
import Navbar from './components/Navbar';


export default function App() {
  return (
    <div>
    <Navbar title="QuickTools" firstLink="Calculator" secondLink="Chatify"/>
    {/* <Calculator/> */}
    </div>
  )
};