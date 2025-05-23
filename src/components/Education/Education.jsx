import BoldText from "../BoldText/BoldText";
import ContainCard from "../ContainCard/ContainCard";
import FadeInSection from "../FadeInSection/FadeInSection";
import SplitTitle from "../SplitTitle/SplitTitle";
import styles from "./Education.module.css";

const Education = ({
    header = "Education",
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
                                <div className={styles.degree}>{content.degree}</div>
                                <div className={styles.duration}>{content.duration}</div>
                            </SplitTitle>
                            <a href={content.href} target="_blank" className={styles.institution}>{content.institution}</a>
                            <div className={styles.title}><BoldText>{content.score}</BoldText></div>
                            {content.description.length > 0 && <ul className={styles.description}>
                                {content.description.map((item, index) => (
                                    <li key={index}><BoldText>{item}</BoldText></li>
                                ))}
                            </ul>}
                        </div>
                    ))}
                </ContainCard>
            </FadeInSection>
        </section>
    );
};

export default Education;