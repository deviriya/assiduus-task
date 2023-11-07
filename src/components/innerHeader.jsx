import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const InnerHeader = () => {

    return (
        <div className="container-fluid">
            <nav className="navbar">
                <div className="nav-brand">
                    <Link to="/dashboard">
                        <img src={logo} width={180} className="img-fluid" />
                    </Link>
                </div>
            </nav>
        </div>
    )
}