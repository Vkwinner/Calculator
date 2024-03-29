// import React from 'react';
// import './Navbar.css'

import { useState } from "react";
import Calculator from "./Calculator"
import Chatify from "./Chatify";


const Navbar = (props) => {
    const [isFirstLinkClicked, setisFirstLinkClicked] = useState(true);
    const [isSecondLinkClicked, setisSecondLinkClicked] = useState(false);

    const handleLinkClickFirst = () => {
            setisFirstLinkClicked(true);
            setisSecondLinkClicked(false);
    }
    const handleLinkClickSecond=()=>{

            setisSecondLinkClicked(true);
            setisFirstLinkClicked(false);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#" onClick={handleLinkClickFirst}>
                                    {props.firstLink}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#" onClick={handleLinkClickSecond}>
                                    {props.secondLink}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
            {isFirstLinkClicked && <Calculator />}
            {isSecondLinkClicked && <Chatify/>}
            </div>
        </>
    )
};

export default Navbar;
