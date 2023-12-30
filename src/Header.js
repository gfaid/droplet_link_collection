import styles from "./Header.module.css";

const Header = () => {
    return(
        <div className={styles.headDiv}>
            <h1 className={styles.title}>Droplet Links</h1>
        </div>
    )
}

export default Header;