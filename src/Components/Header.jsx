import React,{useState} from 'react'
import './Header.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import Dropdown from './Dropdown';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className='header'>
      <p></p>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><HashLink to='/#Gallery'>Gallery</HashLink></li>
          <div className='list1'
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}>
            <li><Link to='/Cuisine'>Cuisine</Link></li>
            {dropdown&& <Dropdown />}
            </div>
            <li><HashLink to='/#About'>About</HashLink></li>
            <li><Link to='/Contact'>Contact us</Link></li>
        </ul>
        <div>
        <Link to='/Profile'><i className="bi bi-person-circle"></i></Link>
        <Link to='/Cart'><i className="bi bi-cart4"></i></Link>
        </div>
        
    </nav>
  )
}

export default Header