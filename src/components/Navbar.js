import React from 'react';
import {Link, useNavigate} from 'react-router-dom';


export default function Navbar() {
  const navigate= useNavigate();
  const handleLogout=()=>{
    localStorage.setItem('isLogin','false')
    navigate("/Login")
  }
  const handleTaskManager=()=>{
    localStorage.setItem('isLogin','true')
    navigate("/TaskManager")
  }
  return (
    <div>
      
      <nav className="navbar  navbar-expand-lg navbar-dark bg-success  ">
              {
                (localStorage.getItem('isLogin')==='false')?
                <div className="container-fluid">  
                <div className="nav-item m-3 ">
                    <Link className="navbar-brand fs-1 fst-italic mr-5" to="/">We Manage</Link>
                    <button className="btn  text-white m-3 btn-lg" onClick={()=>{navigate("/Login")}}>Login</button>
                    <button className="btn  text-white m-3 btn-lg" onClick={()=>{navigate("/SignUp")}}>SignUp</button>
                  </div>
                </div>
                :
                <div className="container-fluid">  
                <div className="nav-item m-3 ">
                  <Link className="navbar-brand fs-1 fst-italic mr-5" to="/">To Do</Link>
                  <button className='btn  text-white m-3 btn-lg' onClick={handleLogout}>LogOut</button>
                  <button className='btn  text-white m-3 btn-lg' onClick={handleTaskManager}>TaskManager</button>
                 
                </div>
                </div>
              }
    </nav>
  </div>
  )
}
