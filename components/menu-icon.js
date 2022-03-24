import React, { useState } from 'react';
import Link from 'next/link';
import styles from './menu-icon.module.css';
import utilStyles from '../styles/utils.module.css';

export default function MenuIcon() {
    const [toggleOpen, setToggleOpen] = useState();

    const handleToggle = () => {
        setToggleOpen(!toggleOpen);
    };

    return (
        <div className={styles.menuIcon} onClick={handleToggle}>
            {/* <div className={styles.barsContainer}> */}
                <div></div>
                <div></div>
                <div></div>
            {/* </div> */}

            {toggleOpen ? (
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href="/blog">
                            <a className={utilStyles.colorInherit}>Blog</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/projects">
                            <a className={utilStyles.colorInherit}>Projects</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/docs">
                            <a className={utilStyles.colorInherit}>Docs</a>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">
                            <a className={utilStyles.colorInherit}>About</a>
                        </Link>
                    </li>
                </ul>) : ''}
        </div>
    );
}