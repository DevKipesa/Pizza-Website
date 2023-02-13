import React, {useState} from 'react';
import{Link} from 'react-router-dom';
import logot from "../assets/kim.png";
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
  const[openlinks, setOpenLinks]=useState(false);
  const toggleNavbar=()=>{
    setOpenLinks(!openlinks)
  };
  return (
    <div className='navbar'>
        <div className='leftSide' id={openlinks ?'open':'close'}>
          <img src={logot} alt='background'/>;
        </div>
        <div className='rightSide'>
        <Link to='/home'>Home</Link>
        <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon/>
          </button>
        </div>
    
    </div>
  )
}

export default Navbar