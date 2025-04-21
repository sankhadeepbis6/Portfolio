import React from "react";
import styles from "./BoldText.module.css"; // CSS Module

const BoldText = ({ children }) => {
    const parts = String(children).split(/`(.*?)`/g);

    return (
        <>
            {parts.map((part, index) =>
                index % 2 === 1 ? (
                    <span key={index} className={styles.softBold}>
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </>
    );
};

export default BoldText;
