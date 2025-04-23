import styles from "./Footer.module.css";
import WaveSVG from '../WaveSVG/WaveSVG';

const Footer = () => {
    const buttons = ['Linkedin', 'Github', 'Gmail', 'Facebook'];

    const handleMouseMove = (e, index) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        btn.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTilt = (e) => {
        e.currentTarget.style.transform = 'rotateX(0) rotateY(0)';
    };

    return (
        <footer className={styles.footer}>
            <WaveSVG />
            <div className={styles.footerButtonContainer}>
                {buttons.map((label, index) => (
                    <button
                        key={index}
                        className={styles.footerButton}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={resetTilt}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className={styles.footerTextWrapper}>
                <p className={styles.endText}>
                    &copy; {new Date().getFullYear()} Sankhadeep Biswas. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
