import React, { useEffect, useRef } from 'react';
import styles from './FadeInSection.module.css'; // using CSS Modules

const FadeInSection = ({ children, className, style = {} }) => {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                } else {
                    entry.target.classList.remove(styles.show);
                }
            });
        });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div ref={ref} className={`${styles.hidden} ${className ? className : ''}`} style={style}>
            {children}
        </div>
    );
};

export default FadeInSection;
