import styles from "./Footer.module.css";
import WaveSVG from '../WaveSVG/WaveSVG';

const Footer = () => {
    const buttons = [
        {
            label: 'Linkedin',
            onCLick: () => openWebsite('https://www.linkedin.com/in/sankhadeep-biswas-1b0a1b1b3/')
        },
        {
            label: 'Github',
            onCLick: () => openWebsite('https://github.com/sankhadeepbis6')
        },
        {
            label: 'Gmail',
            onCLick: () => {
                window.location.href = `mailto:${"sankhadeep.biswas.6@gmail.com"}?subject=${"Contact Me"}`;
            }
        },
        {
            label: 'Facebook',
            onCLick: () => openWebsite('https://www.facebook.com/sankhadeep.biswas.7')
        }
    ];

    const openWebsite = (website) => {
        window.open(website, "_blank");
    };

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
                {buttons.map((item, index) => (
                    <button
                        key={index}
                        className={styles.footerButton}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={resetTilt}
                        onClick={item.onCLick}
                    >
                        {item.label}
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
