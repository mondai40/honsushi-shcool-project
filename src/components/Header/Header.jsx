import React from "react";
import "./Header.scss";

class Header extends React.Component {
    render() {
        return(
            <header className="header_container">
                <div className="logo">
                    <h1><a href="#home"><img src="{}" alt=""/></a></h1>
                </div>
                {/* <div className="nav_left">
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#special">SPECIAL</a></li>
                        <li><a href="#location">LOCATION</a></li>
                        <li className="orderNav"><a href="#order">ORDER</a></li>
                    </ul>
                </div> */}
            </header>
        );
    }
}

export default Header;