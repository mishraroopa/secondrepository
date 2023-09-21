import React from 'react'

function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-success bg-success ">
        <hr className='text-light'></hr>
  <div className="container-fluid">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-2">
        <li className="nav-item">
          <div  className="text-light fs-5 fw-bold" aria-current="page">Circkle</div>
        </li></ul>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-2">
        <li className="nav-item">
          <div  className="text-light ms-5 fs-5 fw-bold" aria-current="page">Courses</div>
        </li></ul>
       
         <input className="rounded-pill me-2 ms-5 " type="search" aria-label="Search" />
        
        
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="text-light fs-5  fw-bold" aria-current="page">Corporate Training</div>
        </li></ul>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="text-light ms-5 fs-5 fw-bold" aria-current="page"> Training Calendar</div>
        </li></ul>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="text-light me-5 fs-5 ms-5 fw-bold" aria-current="page">About US</div>
        </li></ul></div></div>
         
      
        <button className="rounded-pill btn btn-outline-success px-5 fw-bold navbar-light bg-light text-success" type="submit">LOGIN</button>
   
    </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default navbar
