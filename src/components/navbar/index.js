import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <NavLink to ="">Home</NavLink>
            <NavLink to ="">Movies</NavLink>
            <NavLink to ="">Series</NavLink>
            <NavLink to ="">Watchlist</NavLink>
            <NavLink to ="/profile">Account</NavLink>
        </div>
    )
}

export default Navbar;