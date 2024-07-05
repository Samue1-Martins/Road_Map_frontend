import React from "react";
import './header.css'
import logoRoadMap from '../../assets/images/logoRoadMap.png'

function Header() {
    return (
        <header className="header">
            <div className="headerLogo">
                <img src={logoRoadMap} alt="" />
            </div>
            <nav className="headerNav">
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Roteiros</a></li>
                    <li><a href="#">Vídeos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header