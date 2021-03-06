import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click,setclick]=useState(false); 
    const handleClick=()=>setclick(!click);
    const closeMobileMenu=()=>setclick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>crowdfund </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click?'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Discover' className='nav-link' onClick={closeMobileMenu}>
                            Discover
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Discover' className='nav-link' onClick={closeMobileMenu}>
                            Get Started
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
