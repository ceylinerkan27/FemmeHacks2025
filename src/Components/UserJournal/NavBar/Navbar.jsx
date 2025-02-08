import React from 'react'
import './Navbar.css';


const Navbar = () => {
    return <div className={"navbar"}>
        <div className={"logoContainer"}>
            <h2>Insert Logo</h2>
        </div>
        <div className={"pagesContainer"}>
            <ul className={"pages"}>
                <li className={"active"}>
                    <a href={"/"}>Journal</a>
                </li>
            </ul>
        </div>

    </div>
};

export default Navbar;