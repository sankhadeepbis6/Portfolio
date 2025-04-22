import styles from './Summery.module.css';
import profilePic from '../../assets/profile.jpg';
import React, { useState, useEffect } from 'react';
import { FaDownload, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const titles = [
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer"
];

const Summery = () => {

    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = titles[index % titles.length];
        let typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting
                    ? current.substring(0, prev.length - 1)
                    : current.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === current) {
                setTimeout(() => setIsDeleting(true), 800);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index]);

    return (
        <div className={styles.profile}>
            <div className={styles.topRow}>
                <img src={profilePic} alt="Profile" className={styles.profilePic} />
                <div>
                    <div className={styles.profileName}>Hi, I'm Sankhadeep Biswas</div>
                    <div className={styles.profileTitle}>I'm a <span className={styles.typingWrapper}>
                        <span className={styles.typingText}>{text}</span>
                        <span className={styles.cursor}>|</span>
                    </span></div>
                </div>
            </div>
            <p className={styles.profileDescription}>
                3+ years of experience in Full-Stack development with expertise in
                modular, test-driven development using React.js and Spring Boot. Skilled in
                CI/CD, REST APIs, and secure coding, with a collaborative approach to
                delivering high-quality, resilient interfaces. Passionate about driving
                impactful solutions in sustainability-focused, high-growth environments.
            </p>
            <div className={styles.buttonRow}>
                <button className={styles.roundButton}>
                    <FaDownload className={styles.icon} />
                    Resume
                </button>
                <button className={styles.roundButton}>
                    <FaLinkedin className={styles.icon} />
                    LinkedIn
                </button>
                <button className={styles.roundButton}>
                    <FaEnvelope className={styles.icon} />
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Summery;