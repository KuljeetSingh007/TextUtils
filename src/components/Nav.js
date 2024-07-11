import React, { useState } from 'react';
import "../styles/Nav.css";
import PropTypes from 'prop-types'
export default function Nav(prop) {
    const [close, setClose] = useState(false);
    const showOpt = () => {
        console.log("click");
        setClose(!close);
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-${prop.mode}  navbar-${prop.mode} `}>
        {/* //  <nav className={`navbar navbar-expand-lg    ${prop.theme}`}>  */}
            <div className="container-fluid">
                <a className={`TextUtils ${prop.theme}`} href="/" >{prop.title}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`${prop.theme} ${prop.mode === 'light' ? 'listStyle': 'listStyle  listLight'} `}  aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`listStyle ${prop.theme} ${prop.mode === 'light' ? 'listStyle': 'listStyle  listLight'}`} href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`listStyle ${prop.theme} dropdown-toggle ${prop.mode === 'light' ? 'listStyle': 'listStyle  listLight'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="/" className={`listStyle ${prop.theme} ${prop.mode === 'light' ? 'listStyle': 'listStyle  listLight'}`} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                    <div onClick={prop.redTheme} className={`hideMe ${close ? "colorRed redOpen" : "colorRed"}`}></div>
                    <div onClick={prop.blueTheme} className={`hideMe ${close ? "colorBlue blueOpen" : "colorBlue"}`}></div>
                    <div onClick={prop.goldTheme} className={`hideMe ${close ? "colorGold goldOpen" : "colorGold"}`}></div>
                    <div onClick={prop.whiteTheme} className={`hideMe ${close ? "colorWhite whiteOpen" : "colorWhite"}`}></div>
                    <div className={`hideMe  ${close ? "themeOpt open" : "themeOpt "} ${prop.mode === 'light' ? 'light' : 'dark'}`}></div>
                    <div onClick={showOpt} className={`${prop.mode === 'light' ? 'themeBtn light' : 'themeBtn dark'}`}></div>
                    <div className={`form-check form-switch text-${prop.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input " onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.mode === 'light' ? 'light' : 'Dark'}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Nav.propTypes = {
    title: PropTypes.string.isRequired
}

// Nav.defaultProps={
//     title: "Set tile here"
// }