import React from "react";
import { Link } from "react-router-dom";

export default function Menu({children}){
    console.log("children is ", children);
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-secondary sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">React CRUD</Link>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            { children }
        </div>
        </React.Fragment>
    )
}