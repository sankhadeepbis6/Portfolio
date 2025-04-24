import CubeButton from '../CubeButton/CubeButton';
import styles from './Overview.module.css';

const Overview = () => {
    return (
        <section className={styles.overview}>
            <CubeButton front={"Overview"} back="Overview" right="Overview" left="Overview" top="Overview" bottom="Overview" effectOnHover={false} />
        </section>
    );
};

export default Overview;