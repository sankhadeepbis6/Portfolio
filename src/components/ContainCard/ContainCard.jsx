import styles from './ContainCard.module.css';

const ContainCard = ({ children, className }) => {
    return (
        <div className={`${styles.card} ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default ContainCard;
