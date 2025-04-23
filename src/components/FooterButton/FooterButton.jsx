import styles from './FooterButton.module.css';

const FooterButton = ({ label, onClick }) => {
    return (
        <button className={styles.footerButton} onClick={onClick}>
            {label}
        </button>
    );
};

export default FooterButton;
