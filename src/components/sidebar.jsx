
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { BsGrid, BsCurrencyDollar } from 'react-icons/bs';
import { IoMdWallet } from 'react-icons/io';
import { AiFillFileText, AiOutlineClose } from 'react-icons/ai';
import { BiSolidUser } from "react-icons/bi";
import { MdContacts } from 'react-icons/md';
import logo from '../assets/logo.png';


export const Sidebar = () => {

    const location=useLocation();

    const sidebar=()=>{
        let Sidemenu = document.querySelector("body")
        Sidemenu.classList.remove("showSide")
    }

    return (
        <div className="sidebar">
            <div className='mb-4 d-flex justify-content-between align-items-center'>
                <Link to="/" className='logo'>
                    <img src={logo} width={180} className="img-fluid p-2" />
                </Link>
                <span className='Mbllogo m-2' onClick={sidebar}><AiOutlineClose /></span>
            </div>
            <ul className='side-item'>
                <li className={`side-link ${location.pathname == "/" && "active"}`}>
                    <Link to='/' className='m-0'><BsGrid /> Dashboard</Link>
                </li>
                <li className={`side-link ${location.pathname == "/accounts" && "active"}`}>
                    <Link to='/accounts' className='m-0'><IoMdWallet /> Accounts</Link>
                </li>
                <li className={`side-link ${location.pathname == "/payroll" && "active"}`}>
                    <Link to='/payroll' className='m-0'><BsCurrencyDollar /> Payroll</Link>
                </li>
                <li className={`side-link ${location.pathname == "/reports" && "active"}`}>
                    <Link to='/reports' className='m-0'><AiFillFileText /> Reports</Link>
                </li>
                <li className={`side-link ${location.pathname == "/advisor" && "active"}`}>
                    <Link to='/advisor' className='m-0'><BiSolidUser /> Advisor</Link>
                </li>
                <li className={`side-link ${location.pathname == "/contacts" && "active"}`}>
                    <Link to='/contacts' className='m-0'><MdContacts /> Contacts</Link>
                </li>
            </ul>
        </div>
    )
}