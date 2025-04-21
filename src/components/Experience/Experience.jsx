import ContainCard from "../ContainCard/ContainCard";
import SplitTitle from "../SplitTitle/SplitTitle";
import styles from "./Experience.module.css";

const Experience = () => {
    return (
        <ContainCard>
            <section className={styles.section}>
                <div className={styles.stickyHeader}>Work Experience</div>
                <div className={styles.content}>
                    <SplitTitle>
                        <a className={styles.institution}>Tata Consultancy Services</a>
                        <div className={styles.duration}>08/2021 - Present</div>
                    </SplitTitle>
                    <div className={styles.title} >System Engineer</div>
                </div>
            </section>
        </ContainCard>
    );
};

export default Experience;