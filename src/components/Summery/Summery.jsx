import styles from './Summery.module.css';
import profilePic from '../../assets/profile.jpg';

const Summery = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.topRow}>
                <img src={profilePic} alt="Profile" className={styles.profilePic} />
                <div>
                    <div className={styles.profileName}>Sankhadeep Biswas</div>
                    <div className={styles.profileTitle}>I'm a <span>Software Engineer</span></div>
                </div>
            </div>
            <p className={styles.profileDescription}>
                3+ years of experience in Full-Stack development with expertise in
                modular, test-driven development using React.js and Spring Boot. Skilled in
                CI/CD, REST APIs, and secure coding, with a collaborative approach to
                delivering high-quality, resilient interfaces. Passionate about driving
                impactful solutions in sustainability-focused, high-growth environments.
            </p>
        </div>
    );
};

export default Summery;