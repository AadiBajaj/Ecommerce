import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

    
    const [menu,setMenu] = useState("Shop All")
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className = 'navbar'>
            <div className = "nav-logo">
                <img src={logo} alt=""/>
                <p>DermaDazz</p>
            </div>
            <div className="dropdown-wrapper">
                <img className="dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt='' />
            </div>
            <ul ref={menuRef} className = "nav-menu">
                <li onClick={()=>{setMenu("Shop All")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop All"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("SkinCare")}}><Link style={{textDecoration:'none'}} to='/SkinCare'>Skincare</Link>{menu==="SkinCare"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("HairCare")}}><Link style={{textDecoration:'none'}} to='/HairCare'>Haircare</Link>{menu==="HairCare"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Makeup")}}><Link style={{textDecoration:'none'}} to='/Makeup'>Makeup</Link>{menu==="Makeup"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
            :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
            <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>  
    )
}
