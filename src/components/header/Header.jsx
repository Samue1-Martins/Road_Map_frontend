import React from "react";
import './header.css'
import logoRoadMap from '../../assets/images/logoRoadMap.png'

function Header() {
    return (
        <header className="header">
            <div className="headerMaxWidth">
            <div className="headerLogo">
                <img src={logoRoadMap} alt="" />
                <h3>Road Maps</h3>
            </div>
            <nav className="headerNav">
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Roteiros</a></li>
                    <li><a href="#">Vídeos</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header