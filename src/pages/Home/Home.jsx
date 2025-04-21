import Summery from '../../components/Summery/Summery';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <section className={styles.heroSection}>
                <Summery />
            </section>
            <section className={styles.contentSection}>
                <p>This is the content below the hero section.</p>
                <p>Scroll down to see more...</p>
                <p>More content here...</p>
                <p>Even more content here...</p>
            </section>
        </div>
    );
};

export default Home;