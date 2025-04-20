import { useContext, useState } from "react";
import { themeContext } from "../contexts/themeContext";

export default function Header() {
    const [isDark, setIsDark] = useContext(themeContext);
    console.log(isDark);
    return (
        <header className= {`header-container ${isDark ? 'dark' : ""}`}>
            <div className="header-content">
                <h2 className="title"><a href="/">Where in the world?</a></h2>
                <p className="theme-changer" onPointerDown={() => {
                    localStorage.setItem('isDarkMode', !isDark);
                    setIsDark(!isDark);
                    
                }}><i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} Mode</p>
            </div>
        </header>
    )
};