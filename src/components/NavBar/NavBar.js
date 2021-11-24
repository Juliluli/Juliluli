import React from 'react'
import { useState } from 'react';
import styles from "./NavBar.module.css"
import Posters from "./Options/Posters"
import Books from "./Options/Posters"
import Gifts from "./Options/Posters"
import Events from "./Options/Posters"


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {setIsOpen(!isOpen);}
    return (
        <div>
            <h1>Menu Juliluli</h1>
            <li>Posters <button value="Posters" onClick={togglePopup} className={styles.button}>Posters</button></li>
            {isOpen && <Posters
                content={<>
                    <b>Posters</b>
                    <p>Here are a lot of posters.</p>
                </>}
                handleClose={togglePopup}
                />}
            <li>Books <button value="Books" onClick={togglePopup} className={styles.button}>Books</button></li>
            {isOpen && <Books
                content={<>
                    <b>Books</b>
                    <p>Here are a lot of Books.</p>
                </>}
                handleClose={togglePopup}
                />}
            <li>Gifts <button value="Gifts" onClick={togglePopup} className={styles.button}>Gifts</button></li>
            {isOpen && <Gifts
                content={<>
                    <b>Gifts</b>
                    <p>Here are a lot of Gifts.</p>
                </>}
                handleClose={togglePopup}
                />}
            <li>Events <button value="Events" onClick={togglePopup} className={styles.button}>Events</button></li>
            {isOpen && <Events
                content={<>
                    <b>Events</b>
                    <p>Here are a lot of Events.</p>
                </>}
                handleClose={togglePopup}
                />}
        </div>
    )
}

export default NavBar
