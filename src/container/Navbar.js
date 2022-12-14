import React from 'react'
import{Link} from 'react-router-dom'
const Navbar = () => {


  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Billing App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category Wise Bill
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Barchart">Time-Series Chart</Link>
        </li>
        <li>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/FoodNDining">FoodNDining</Link></li>
            <li><Link className="dropdown-item" to="/utility">utility</Link></li>
            <li><Link className="dropdown-item" to="/shopping">shopping</Link></li>
            <li><Link className="dropdown-item" to="/education">education</Link></li>
            <li><Link className="dropdown-item" to="/Travel">Travel</Link></li>
            <li><Link className="dropdown-item" to="/Personal Care">Personal Care</Link></li>
          </ul>
        </li>
      </ul>
     
        <button className="btn btn-success">Monthly Budget: Rs 50000</button>
   
    </div>
  </div>
</nav> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">Billing App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to="/Barchart">Time-Series Chart</Link>
        </li>
      
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/FoodNDining">FoodNDining</Link></li>
            <li><Link className="dropdown-item" to="/utility">utility</Link></li>
            <li><Link className="dropdown-item" to="/shopping">shopping</Link></li>
            <li><Link className="dropdown-item" to="/education">education</Link></li>
            <li><Link className="dropdown-item" to="/Travel">Travel</Link></li>
            <li><Link className="dropdown-item" to="/Personal Care">Personal Care</Link></li>
          </ul>
        </li>
        
      </ul>
     <button className="btn btn-success">Monthly Budget: Rs 50000</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
