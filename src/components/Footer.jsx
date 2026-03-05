import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    Made by <span className={styles.name}>Rudra Gupta</span> |{' '}
                    <a
                        href="https://rudra-gupta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        Portfolio
                    </a>
                </p>
            </div>
        </footer>
    );
}
