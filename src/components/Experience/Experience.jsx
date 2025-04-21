import ContainCard from "../ContainCard/ContainCard";
import SplitTitle from "../SplitTitle/SplitTitle";
import styles from "./Experience.module.css";

const Experience = ({
    header = "Work Experience",
    contents
}) => {
    return (
        <ContainCard>
            <section className={styles.section}>
                <div className={styles.stickyHeader}>{header}</div>
                {contents.map((content, index) => (
                    <div key={index} className={styles.content}>
                        <SplitTitle>
                            <a href={content.href} className={styles.institution}>{content.institution}</a>
                            <div className={styles.duration}>{content.duration}</div>
                        </SplitTitle>
                        <div className={styles.title}>{content.title}</div>
                        <ul className={styles.description}>
                            {content.description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </ContainCard>
    );
};

export default Experience;