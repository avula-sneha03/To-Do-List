import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
export default function Home() {
  localStorage.setItem('isProfile',"false")
  return (
    <div>
        <div><Navbar /></div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain important"}}>
            <h1 style={{padding :15}}>Welcome to Task Manager!</h1>
            <h3 style={{textAlign:"center", padding :20}}>Please SignUp</h3>
        </div>
    </div>
  )
}


