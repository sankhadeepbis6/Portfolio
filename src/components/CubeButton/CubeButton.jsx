import styles from "./CubeButton.module.css";

const CubeButton = ({
    front = "front",
    back = "back",
    right = "right",
    left = "left",
    top = "top",
    bottom = "bottom",
    effectOnHover = false,
    width = 100,
    height = 100,
}) => {
    const cubeClass = effectOnHover ? styles.hoverCube : styles.animatedCube;

    return (
        <div className={styles.cubeContainer} style={{ width, height }}>
            <div className={`${styles.cube} ${cubeClass}`}>
                <div className={`${styles.face} ${styles.front}`} style={{ transform: `translateZ(${width / 2}px)` }} >{front}</div>
                <div className={`${styles.face} ${styles.back}`} style={{ transform: `rotateY(180deg) translateZ(${width / 2}px)` }}>{back}</div>
                <div className={`${styles.face} ${styles.right}`} style={{ transform: `rotateY(90deg) translateZ(${width / 2}px) rotateZ(270deg)` }}>{right}</div>
                <div className={`${styles.face} ${styles.left}`} style={{ transform: `rotateY(-90deg) translateZ(${width / 2}px)` }}>{left}</div>
                <div className={`${styles.face} ${styles.top}`} style={{ transform: `rotateX(90deg) translateZ(${width / 2}px) rotateZ(180deg)` }}>{top}</div>
                <div className={`${styles.face} ${styles.bottom}`} style={{ transform: `rotateX(-90deg) translateZ(${width / 2}px)` }}>{bottom}</div>
            </div>
        </div>
    );
};

export default CubeButton;