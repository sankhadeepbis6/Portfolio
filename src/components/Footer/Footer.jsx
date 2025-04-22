import React from 'react';
import styles from "./Footer.module.css";
import WaveSVG from '../WaveSVG/WaveSVG';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <WaveSVG />
            <div className={styles.footerContent}>
                <p className={styles.endText}>&copy; {new Date().getFullYear()} Sankhadeep Biswas. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;