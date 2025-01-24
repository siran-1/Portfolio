import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/header.css';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const lightTheme = {
            '--light-background': '#fafafa',
            '--Off-White': '#e1e1e1',
            '--Black': '#1A1B1F',
            '--Light-black': '#62646d',
            '--green': '#37EBA9',
            '--blue': '#5B37EB',
            '--cards': '#fff',
        };
        const darkTheme = {
            '--light-background': '#212226',
            '--Off-White': '#000000',
            '--Black': '#e5e5e5',
            '--Light-black': '#BBBBBB',
            '--green': '#CF43FD',
            '--blue': '#26113C',
            '--cards': '#000000',
        };

        const themeStyles = theme === 'light' ? lightTheme : darkTheme;
        for (const [key, value] of Object.entries(themeStyles)) {
            document.documentElement.style.setProperty(key, value);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // resume download
    const handleResumeDownload = () => {
        const fileName = "siranjeevi_muthusamy.pdf";
        const fileUrl = `${window.location.origin}/${fileName}`;

        const downloadAnchor = document.createElement("a");
        downloadAnchor.href = fileUrl;
        downloadAnchor.download = fileName;
        downloadAnchor.target = "_blank";

        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        document.body.removeChild(downloadAnchor);
    };

    return (
        <header className="header container section">
            <nav className="header__nav">
                <div>
                    <ul className="header__menu">
                        <li>
                            <a className="header__link name active" href="/">
                                Siran
                            </a>
                        </li>
                        <li>
                            <a className="header__link revert_tab_btn" href="#work">
                                Work
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="header__menu">
                        <li>
                            <button className="header__mode mode-switch" onClick={toggleTheme} data-attribute="light">
                                <i className="mode-icon">
                                    {theme == 'light' ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                        <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>}
                                </i>
                            </button>
                        </li>
                        <li>
                            <button className="header__resume btn" onClick={handleResumeDownload}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M12 7V12.5M10 11L11.2929 12.2929C11.6262 12.6262 11.7929 12.7929 12 12.7929C12.2071 12.7929 12.3738 12.6262 12.7071 12.2929L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.99023 16H14.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>&nbsp;cv
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
