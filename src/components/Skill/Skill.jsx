import styles from "./Skill.module.css";
import { FaJava, FaReact, FaPython, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa6";
import { SiApachekafka, SiCplusplus, SiMongodb, SiSpringboot } from "react-icons/si";
import { RiJavascriptFill, RiAiGenerate2 } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";

const Skill = ({
    header = "Skills",
}) => {
    return (
        <section className={styles.section}>
            <div className={styles.stickyHeader}>{header}</div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <div className={styles.title} >Java</div>
                    <FaJava className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >Spring Boot</div>
                    <SiSpringboot className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >React.js</div>
                    <FaReact className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >JavaScript</div>
                    <RiJavascriptFill className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >Python</div>
                    <FaPython className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >HTML</div>
                    <FaHtml5 className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >CSS</div>
                    <FaCss3Alt className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >C++</div>
                    <SiCplusplus className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >MongoDB</div>
                    <SiMongodb className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >SQL</div>
                    <BsFiletypeSql className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >C#</div>
                    <TbBrandCSharp className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >Git</div>
                    <FaGithub className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >Kafka</div>
                    <SiApachekafka className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <div className={styles.title} >Generative AI</div>
                    <RiAiGenerate2 className={styles.icon} />
                </div>
            </div>
        </section>
    );
};

export default Skill;