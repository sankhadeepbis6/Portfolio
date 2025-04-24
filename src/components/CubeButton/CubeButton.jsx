import styles from "./CubeButton.module.css";

const CubeButton = ({
    front = "front",
    back = "back",
    right = "right",
    left = "left",
    top = "top",
    bottom = "bottom",
    effectOnHover = false,
}) => {
    const cubeClass = effectOnHover ? styles.hoverCube : styles.animatedCube;

    return (
        <div className={styles.cubeContainer}>
            <div className={`${styles.cube} ${cubeClass}`}>
                <div className={`${styles.face} ${styles.front}`}>{front}</div>
                <div className={`${styles.face} ${styles.back}`}>{back}</div>
                <div className={`${styles.face} ${styles.right}`}>{right}</div>
                <div className={`${styles.face} ${styles.left}`}>{left}</div>
                <div className={`${styles.face} ${styles.top}`}>{top}</div>
                <div className={`${styles.face} ${styles.bottom}`}>{bottom}</div>
            </div>
        </div>
    );
};

export default CubeButton;