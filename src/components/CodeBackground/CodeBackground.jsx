import React, { useState, useEffect } from 'react';
import styles from './CodeBackground.module.css';

const titles = [
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer",
];

const CodeBackground = () => {
    const [lines, setLines] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;
        const currentLine = titles[lineIndex] || '';

        if (!isDeleting) {
            // Typing phase
            if (charIndex <= currentLine.length) {
                timeout = setTimeout(() => {
                    const updatedLines = [...lines];
                    updatedLines[lineIndex] = currentLine.substring(0, charIndex);
                    setLines(updatedLines);
                    setCharIndex((prev) => prev + 1);
                }, 100);
            } else {
                if (lineIndex < titles.length - 1) {
                    timeout = setTimeout(() => {
                        setLineIndex((prev) => prev + 1);
                        setCharIndex(0);
                    }, 400);
                } else {
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                        setCharIndex(currentLine.length);
                    }, 1500);
                }
            }
        } else {
            // Deleting phase
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    const updatedLines = [...lines];
                    updatedLines[lineIndex] = currentLine.substring(0, charIndex - 1);
                    setLines(updatedLines);
                    setCharIndex((prev) => prev - 1);
                }, 40);
            } else {
                if (lineIndex > 0) {
                    timeout = setTimeout(() => {
                        setLineIndex((prev) => prev - 1);
                        setCharIndex(titles[lineIndex - 1].length);
                    }, 40);
                } else {
                    // Finished deleting all
                    timeout = setTimeout(() => {
                        setIsDeleting(false);
                        setLineIndex(0);
                        setCharIndex(0);
                        setLines([]);
                    }, 200);
                }
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, lineIndex, isDeleting, lines]);

    return (
        <div className={styles.profileTitle}>
            <div className={styles.typingWrapper}>
                {lines.map((line, i) => (
                    <div key={i}>
                        {line}{i === lineIndex && <span className={styles.cursor}>|</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CodeBackground;
