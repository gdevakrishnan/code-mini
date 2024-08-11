import React, { Fragment, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import appContext from '../context/appContext';

function Navbar() {
    const {
        user,
        setUser
    } = useContext(appContext);

    const [menuBtn, setMenuBtn] = useState(false);
    const nav = useNavigate();

    const toggleMenu = () => {
        setMenuBtn(!menuBtn);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("code-mini-auth");
        nav('/');
    };

    return (
        <Fragment>
            <header className="navbar">
                <nav>
                    <Link to='/' className='logo'>Codemini</Link>
                    <input type="checkbox" id="check" checked={menuBtn} onChange={toggleMenu} />
                    <label htmlFor='check' className="checkbtn">
                        {
                            menuBtn ? <GrClose className='menu_btn' /> : <FaBarsStaggered className='menu_btn' />
                        }
                    </label>

                    <ul className={menuBtn ? "nav-menu active" : "nav-menu"}>
                        <li title='Home'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        {
                            (user && user.uname && user.gmail) ? (
                                <Fragment>
                                    <li>
                                        <Link to={'/code'}>Code</Link>
                                    </li>
                                    <li>
                                        <Link to={'/'}>{user.uname}</Link>
                                    </li>
                                    <li>
                                        <button onClick={(e) => {
                                            handleLogout(e);
                                        }}>Logout</button>
                                    </li>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <li title='signup'>
                                        <Link to={'/signup'}>Signup</Link>
                                    </li>
                                    <li title='signin'>
                                        <Link to={'/signin'}>Signin</Link>
                                    </li>
                                </Fragment>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
}

export default Navbar;