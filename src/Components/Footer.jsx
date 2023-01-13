import React from 'react'
import './Footer.css'
const currentYear=new Date().getFullYear()
function Footer() {
  return (
    <div className='Footer'>      
        <div className='f1'>
            <h3>YOU DON'T NEED SILVER FORK TO EAT GOOD FOOD!</h3>
        </div>
        <div className='f2'>
            <div>
                <p>Licious specials</p>
                <p>Special</p>
                <p>Exclusive</p>
                <p></p>
            </div>
            <div>
                <p>About</p>
                <p>Blogs</p>
                <p>Wishlist</p>
                <p>Support</p>
                <p>Contact</p>
            </div>
            <div>
                <p>FAQ's</p>
                <p>Privacy policy</p>
                <p>Refund policy</p>
                <p>Careers @ foodor</p>
            </div>
        </div>
        <div className='f1'>
            <div>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
            </div>
            <p>Copyright © {currentYear} by Foodor</p>
        </div>
    </div>
  )
}

export default Footer
