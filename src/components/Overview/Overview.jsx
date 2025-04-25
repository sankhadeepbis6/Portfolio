import CubeButton from '../CubeButton/CubeButton';
import styles from './Overview.module.css';

const Overview = () => {
    return (
        <section className={styles.overview}>
            <CubeButton
                front="Web Apps" back="REST API" right="Agile"
                left="CI/CD" top="OOPs" bottom="Github"
                effectOnHover={false} width={150} height={150} />
            <CubeButton
                front="Microservices" back="Version Control" right="Cloud"
                left="Caching" top="Load Balancing" bottom="Unit Test"
                effectOnHover={false} width={150} height={150} />
        </section>
    );
};

export default Overview;