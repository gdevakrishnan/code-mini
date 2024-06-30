import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
    const [menuBtn, setMenuBtn] = useState(false); // State for menu button toggle

    const toggleMenu = () => {
        setMenuBtn(!menuBtn);
    };

    return (
        <Fragment>
            <header className="navbar">
                <nav>
                    <Link to='/' className='logo'>Code-Mini</Link>
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
                        <li title='signup'>
                            <Link to={'/signup'}>Signup</Link>
                        </li>
                        <li title='signin'>
                            <Link to={'/signin'}>Signin</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
}

export default Navbar;