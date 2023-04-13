import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  
  const[menuOpen, setMenuOpen] = useState(false)
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen && screenWidth < 800) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen, screenWidth]);

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/">
          <h2>gnNews</h2>
        </Link>
        {menuOpen || screenWidth > 800 ?
          <ul className={styles.menu}>
            <li>Display</li>
            <li>Repository</li>
          </ul>
          : null
        }
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`${styles.hamburger__line} ${menuOpen ? styles.active : ''}`}></div>
          <div className={`${styles.hamburger__line} ${menuOpen ? styles.active : ''}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Header


