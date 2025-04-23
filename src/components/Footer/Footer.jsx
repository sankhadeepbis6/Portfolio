import React from 'react';
import styles from "./Footer.module.css";
import WaveSVG from '../WaveSVG/WaveSVG';
import FooterButton from '../FooterButton/FooterButton';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <WaveSVG />
            <FooterButton label="Contact Me" onClick={() => console.log("clicked")} />
            <div className={styles.footerContent}>
                <p className={styles.endText}>&copy; {new Date().getFullYear()} Sankhadeep Biswas. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;