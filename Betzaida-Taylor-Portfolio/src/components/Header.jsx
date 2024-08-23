import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <h1>Betzaida Taylor</h1>
            <nav>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Resume">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;