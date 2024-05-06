import React from "react";
import './Nav.css';
function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="nav">
                    <div className="firstcontainer">
                        <div className="image">
                            <img  className="logo" src="https://www.jsmastery.pro/assets/general/icons/jsm-logo.svg" alt=""/>
                        </div>
                        <div className="text">Next.js 14 Course</div>
                        <div className="text line">Masterclass Coaching</div>
                        <div>
                            <img className="img" src="https://www.jsmastery.pro/assets/general/icons/hamburger-menu.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
} 
export default Navbar;