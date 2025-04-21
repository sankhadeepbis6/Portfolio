import Experience from '../../components/Experience/Experience';
import Summery from '../../components/Summery/Summery';
import styles from './Home.module.css';

const Home = () => {

    const experienceContents = [
        {
            institution: "Tata Consultancy Services",
            duration: "08/2021 - Present",
            href: "https://www.tcs.com/",
            title: "System Engineer",
            description: [
                "Over 3 years of experience in software development, specializing in Java, Spring Boot, and Microservices for enterprise-scale applications.",
                "Strong expertise in backend development, leveraging Spring Framework, RESTful APIs to build scalable and high-performance applications.",
                "Hands-on experience with microservices architecture, designing and implementing distributed systems using Spring Boot and REST APIs.",
                "Experience with cloud platforms, including deployment and infrastructure management. I have knowledge on AWS.",
                "Proficient in frontend technologies, including React, JavaScript, HTML, and CSS, for building responsive and modern UI components.",
                "Familiarity with databases, including PostgreSQL, MySQL, and MongoDB, optimizing queries and ensuring data integrity.",
                "Strong problem-solving and debugging skills, optimizing application performance and resolving technical issues efficiently.",
                "Worked with DevOps tools, including Jenkins, Docker, Kubernetes, and build tools like Maven and Gradle, streamlining CI/CD processes.",
                "Experience with source control systems, including Git and GitLab, for efficient version management and collaboration.",
                "Worked extensively with APIs, including SOAP, REST, and Kafka, for seamless integration between services.",
                "Strong understanding of data processing, handling XML, JSON formats, and integrating with external services.",
                "Experience with unit testing frameworks, including JUnit, Mockito, ensuring high-quality and reliable code.",
                "Ability to work in global teams, collaborating across time zones and providing technical mentorship.",
                "Quick learner and self-motivated, capable of working independently with minimal supervision while delivering high-quality solutions."
            ]
        }
    ]

    return (
        <div>
            <section className={styles.heroSection}>
                <Summery />
            </section>
            <section className={styles.contentSection}>
                <Experience header="Work Experience"
                    contents={experienceContents} />
                <p>This is the content below the hero section.</p>
                <p>Scroll down to see more...</p>
                <p>More content here...</p>
                <p>Even more content here...</p>
            </section>
        </div>
    );
};

export default Home;