import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import './styles.scss';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

import { FiSearch } from 'react-icons/fi';
import { BsBellFill } from 'react-icons/bs';

export const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="container-fluid">
            <nav className="navbar">
                <div className="nav-brand">
                    
                </div>

                <div className="navbar-items">
                    <ul className="nav-item">
                        <li className="nav-link grpField">
                            <span class="srchIcn"><FiSearch /></span>
                            <input type="text" class="form-control" placeholder="search" />
                        </li>
                        <li className="nav-link">
                            <div className="position-relative">
                                <BsBellFill />
                                <span class="position-absolute top-25 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </div>

                        </li>
                        <li class="nav-link">
                            <div className='drop'>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>
                                        <img src={user} width={30} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <h6>Site Settings</h6>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <h6>Security Settings</h6>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <h6>Logout</h6>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}