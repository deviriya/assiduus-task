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
import {BiMenuAltLeft} from 'react-icons/bi';

import { FiSearch } from 'react-icons/fi';
import { BsBellFill } from 'react-icons/bs';

export const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const [notify, setnotify] = useState(false);
    const notifytoggle = () => setnotify((prevState) => !prevState);

    const sidebar=()=>{
        let Sidemenu = document.querySelector("body")
        Sidemenu.classList.add("showSide")
    }
    return (
        <div className="container-fluid">
            <nav className="navbar">
                <div className="nav-brand" onClick={sidebar}>
                    <BiMenuAltLeft />
                </div>

                <div className="navbar-items">
                    <ul className="nav-item">
                        <li className="nav-link grpField">
                            <span class="srchIcn"><FiSearch /></span>
                            <input type="text" class="form-control" placeholder="search" />
                        </li>
                        <li className="nav-link">
                            <div className='drop'>
                                <Dropdown isOpen={notify} toggle={notifytoggle}>
                                    <DropdownToggle>
                                        <div className="position-relative">
                                            <BsBellFill />
                                            <span class="position-absolute top-25 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                                <span class="visually-hidden">New alerts</span>
                                            </span>
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            Notification 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Notification 2
                                        </DropdownItem>
                                        <DropdownItem>
                                            Notification 3
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
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