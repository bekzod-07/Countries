import React, { useState } from 'react';
import "./Header.css";
import { FaRegMoon } from 'react-icons/fa6';
import SearchFilter from '../SearchFilter/SearchFilter';

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div>
            <header className={`header ${darkMode ? 'dark' : ''}`}>
                <div className="container">
                    <div className="header__column">
                        <div className="header__column__text">
                            <h2>Where in the world?</h2>
                        </div>
                        <div className="header__column__darkMode" onClick={toggleDarkMode}>
                            <FaRegMoon className='LunaIcon' />
                            <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
                        </div>
                    </div>
                </div>
            </header>
            <SearchFilter darkMode={darkMode} />
        </div>
    );
}

export default Header;
