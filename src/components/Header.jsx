import React, { useState, useEffect } from "react";
import '../css/header.css';

export default function Header() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const lightTheme = {
            '--light-background': '#fafafa',
            '--Off-White': '#eeeff1',
            '--Black': '#1A1B1F',
            '--Light-black': '#62646d',
            '--green': '#37EBA9',
            '--blue': '#5B37EB'
        };
        const darkTheme = {
            '--light-background': '#212226',
            '--Off-White': '#000000',
            '--Black': '#e5e5e5',
            '--Light-black': '#BBBBBB',
            '--green': '#CF43FD',
            '--blue': '#26113C'
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
      const fileUrl = `../public/${fileName}`;

      const downloadAnchor = document.createElement("a");
      downloadAnchor.href = fileUrl;
      downloadAnchor.download = fileName;
      downloadAnchor.target = "_blank";

      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      document.body.removeChild(downloadAnchor);
  };

    return (
      <header className="header container">
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
            <li>
              <a className="header__link revert_tab_btn" href="http://blog.siranstatus200.com/">Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="header__menu">
            <li>
              <button className="header__mode mode-switch" onClick={toggleTheme} data-attribute="light">
                <i className={`mode-icon far fa-lg ${theme == 'light'? 'fa-moon':'fa-sun'}`}></i>
              </button>
            </li>
            <li>
              <button className="header__resume btn resumeButton_desktop" onClick={handleResumeDownload}>
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    );
}
