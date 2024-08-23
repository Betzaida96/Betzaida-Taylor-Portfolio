import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-7xl font-bold text-pinkyRed">Betzaida Taylor</h1>
            <nav>
                <ul className="flex space-x-2 p-4">
                    <li><Link to="/" className={`px-8 py-2 rounded-t-lg
                        ${location.pathname === '/' ? 'bg-lavender text-2xl text-white' : 'hover:bg-lavender hover:text-pinkyRed'}`}
                        >About Me</Link></li>
                    
                    <li><Link to="/Portfolio" className={`px-8 py-2 rounded-t-lg
                        ${location.pathname === '/' ? 'bg-lavender text-2xl text-white' : 'hover:bg-lavender hover:text-pinkyRed'}`}
                        >Portfolio</Link></li>
                    
                    <li><Link to="/Contact" className={`px-8 py-2 rounded-t-lg
                        ${location.pathname === '/' ? 'bg-lavender text-2xl text-white' : 'hover:bg-lavender hover:text-pinkyRed'}`}
                        >Contact</Link></li>
                    
                    <li><Link to="/Resume" className={`px-8 py-2 rounded-t-lg
                        ${location.pathname === '/' ? 'bg-lavender text-2xl text-white' : 'hover:bg-lavender hover:text-pinkyRed'}`}>
                            Resume</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;