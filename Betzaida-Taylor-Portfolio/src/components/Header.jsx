import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <Header>
            <h1>Betzaida Taylor</h1>
            <nav>
                <ul>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/Portfolio"></Link>Portfolio</li>
                    <li><Link to="/Contact"></Link>Contact</li>
                    <li><Link to="/Resume"></Link>Resume</li>
                </ul>
            </nav>
        </Header>
    );
};

export default Header;