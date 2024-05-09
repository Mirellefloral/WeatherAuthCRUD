import React from 'react'
import { Link } from 'react-router-dom'

 const Header = () => {
    return (
        <div>
            <header className="header">
        <div className="logo">
          <img src="../components/OIP.jpeg"
          alt= "logo" class="icon"></img>
        </div>
       <nav className="navbar">  
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="navbar-link">Signup</Link>
          </li>
           <li className="navbar-item"> 
            <Link to="/weather-blog" className="navbar-link">WeatherBlog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/weather" className="navbar-link">Weather</Link>
           </li> 
        </ul>
      </nav> 
    </header>

        </div>
    )
}
export default Header;