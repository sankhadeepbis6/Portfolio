import styles from './ContainCard.module.css';

const ContainCard = ({ children }) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};

export default ContainCard;
