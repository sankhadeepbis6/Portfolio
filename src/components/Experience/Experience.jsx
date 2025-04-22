import BoldText from "../BoldText/BoldText";
import ContainCard from "../ContainCard/ContainCard";
import FadeInSection from "../FadeInSection/FadeInSection";
import SplitTitle from "../SplitTitle/SplitTitle";
import styles from "./Experience.module.css";

const Experience = ({
    header = "Work Experience",
    contents
}) => {
    return (
        <section className={styles.section}>
            <FadeInSection className={styles.stickyHeader}>
                {header}
            </FadeInSection>
            <FadeInSection>
                <ContainCard>
                    {contents.map((content, index) => (
                        <div key={index} className={styles.content}>
                            <SplitTitle>
                                <a href={content.href} target="_blank" rel="noreferrer" className={styles.institution}>{content.institution}</a>
                                <div className={styles.duration}>{content.duration}</div>
                            </SplitTitle>
                            <div className={styles.title}>{content.title}</div>
                            <ul className={styles.description}>
                                {content.description.map((item, index) => (
                                    <li key={index}><BoldText>{item}</BoldText></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ContainCard>
            </FadeInSection>
        </section>
    );
};

export default Experience;