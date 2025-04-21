import styles from "./SplitTitle.module.css";

const SplitTitle = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default SplitTitle;
