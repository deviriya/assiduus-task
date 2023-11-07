
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { BsGrid, BsCurrencyDollar } from 'react-icons/bs';
import { IoMdWallet } from 'react-icons/io';
import { AiFillFileText } from 'react-icons/ai';
import { BiSolidUser } from "react-icons/bi";
import { MdContacts } from 'react-icons/md';
import logo from '../assets/logo.png';


export const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className='mb-4'>
                <Link to="/dashboard">
                    <img src={logo} width={180} className="img-fluid p-2" />
                </Link>
            </div>
            <ul className='side-item'>
                <li className='side-link active'>
                    <Link to='/dashboard' className='m-0'><BsGrid /> Dashboard</Link>
                </li>
                <li className='side-link'>
                    <Link to='/dashboard' className='m-0'><IoMdWallet /> Accounts</Link>
                </li>
                <li className='side-link'>
                    <Link to='/dashboard' className='m-0'><BsCurrencyDollar /> Payroll</Link>
                </li>
                <li className='side-link'>
                    <Link to='/dashboard' className='m-0'><AiFillFileText /> Reports</Link>
                </li>
                <li className='side-link'>
                    <Link to='/dashboard' className='m-0'><BiSolidUser /> Advisor</Link>
                </li>
                <li className='side-link'>
                    <Link to='/dashboard' className='m-0'><MdContacts /> Contacts</Link>
                </li>
            </ul>
        </div>
    )
}