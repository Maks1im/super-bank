import styles from "./Header.module.scss"

const Header = () => {
    return (
       <header className={styles.header}>
           <h2 className={styles.logo}>super-bank</h2>
           <nav className={styles.navbar}>
               <ul className={styles.navbarUl}>
                   <li><a href="">Main</a></li>
                   <li><a href="">About us</a></li>
                   <li><a href="">Contacts</a></li>
               </ul>
           </nav>
           <button className={styles.logInButton}><a href="">Log in</a></button>
       </header>
    );
};

export default Header;