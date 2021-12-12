import React from 'react'
import './navbar.css'
import {Link}  from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className='nav-outer'>
            <div className="nav-left">
           
               <Link to={'/'} className="company-container"> <img className="logo" style={{color:props.colordata}} src="images/comp-logo.png"></img>  <p className="company-name-nav" style={{color:props.colordata}}>Cryptobase</p></Link>
            </div>
            <div className="nav-right">
            <Link to={'/info'}> <p className='instruction' style={{color:props.colordata}}>{props.navleft}</p> </Link>
 

                <p></p>
            </div>
        </div>
    )
}

export default Navbar;
