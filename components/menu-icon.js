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
                            <span className={utilStyles.colorInherit}>Blog</span>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/projects">
                            <span className={utilStyles.colorInherit}>Projects</span>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/docs">
                            <span className={utilStyles.colorInherit}>Docs</span>
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">
                            <span className={utilStyles.colorInherit}>About</span>
                        </Link>
                    </li>
                </ul>) : ''}
        </div>
    );
}