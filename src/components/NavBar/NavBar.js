import React from 'react'
import { useState } from 'react';
import CartWidget from './CartWidget/CartWidget';
import styles from "./NavBar.module.css"
import Option from "./Options/Option"
import logo from '../../logo.png';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {setIsOpen(!isOpen);}
    return (
        <>
        <div className={styles.child}><img src={logo} className={styles.App_logo} alt="logo" /></div>
        <div className={styles.child}><CartWidget /></div>
        <div>
            <h1>Menu Juliluli</h1>
            <li><button value="Posters" onClick={togglePopup} className={styles.button}>Posters</button></li>
            {isOpen && <Option
                content={<>
                    <b>Posters</b>
                    <p>Here are a lot of posters.</p>
                </>}
                handleClose={togglePopup}
                />}
            <li><button value="Books" onClick={togglePopup} className={styles.button}>Books</button></li>
            {isOpen && <Option
                content={<>
                    <b>Books</b>
                    <p>Here are a lot of Books.</p>
                </>}
                handleClose={togglePopup}
                />}
            <li><button value="Gifts" onClick={togglePopup} className={styles.button}>Gifts</button></li>
            {isOpen && <Option
                content={<>
                    <b>Gifts</b>
                    <p>Here are a lot of Gifts.</p>
                </>}
                handleClose={togglePopup}
                />}
            <li><button value="Events" onClick={togglePopup} className={styles.button}>Events</button></li>
            {isOpen && <Option
                content={<>
                    <b>Events</b>
                    <p>Here are a lot of Events.</p>
                </>}
                handleClose={togglePopup}
                />}
        </div>
        </>
    )
}

export default NavBar
