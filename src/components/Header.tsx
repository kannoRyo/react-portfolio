import React from 'react'
import { Link } from "react-router-dom"

const Header = ()=>{

	return (
	<div className="header">
        <div className="h-left">
            <p>Kanno Ryo</p> 
        </div>
        <div className="h-right">
            <Link to="/">
             <a>HOME</a>
            </Link>
            <Link to="/works">
                <a>WORKS</a>
            </Link>
            <Link to="/contact">
                <a>CONTACT</a>
            </Link>
        </div>
    </div>
)
}

export default Header