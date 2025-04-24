import styles from "./Skill.module.css";
import FadeInSection from "../FadeInSection/FadeInSection";
import { FaJava, FaReact, FaPython, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa6";
import { SiApachekafka, SiCplusplus, SiMongodb, SiSpringboot } from "react-icons/si";
import { RiJavascriptFill, RiAiGenerate2 } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";

const Skill = ({
    header = "Skills",
}) => {

    const skills = [
        {
            name: "Java",
            icon: <FaJava className={styles.icon} />,
        },
        {
            name: "Spring Boot",
            icon: <SiSpringboot className={styles.icon} />,
        },
        {
            name: "React.js",
            icon: <FaReact className={styles.icon} />,
        },
        {
            name: "JavaScript",
            icon: <RiJavascriptFill className={styles.icon} />,
        },
        {
            name: "Python",
            icon: <FaPython className={styles.icon} />,
        },
        {
            name: "HTML",
            icon: <FaHtml5 className={styles.icon} />,
        },
        {
            name: "CSS",
            icon: <FaCss3Alt className={styles.icon} />,
        },
        {
            name: "C++",
            icon: <SiCplusplus className={styles.icon} />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb className={styles.icon} />,
        },
        {
            name: "SQL",
            icon: <BsFiletypeSql className={styles.icon} />,
        },
        {
            name: "C#",
            icon: <TbBrandCSharp className={styles.icon} />,
        },
        {
            name: "Git",
            icon: <FaGithub className={styles.icon} />,
        },
        {
            name: "Kafka",
            icon: <SiApachekafka className={styles.icon} />,
        },
        {
            name: "Generative AI",
            icon: <RiAiGenerate2 className={styles.icon} />,
        }
    ]

    return (
        <section className={styles.section}>
            <FadeInSection className={styles.stickyHeader}>
                {header}
            </FadeInSection>
            <div className={styles.container}>
                {skills.map((skill, index) => (
                    <FadeInSection className={styles.item} key={index} style={{ transitionDelay: `${(index % 4) * 200}ms` }}>
                        <div className={styles.title}>{skill.name}</div>
                        {skill.icon}
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Skill;