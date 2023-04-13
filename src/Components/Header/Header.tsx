import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  
  const[menuOpen, setMenuOpen] = useState(false)
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setMenuOpen(false)
      } else {
        setMenuOpen(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/">
          <h2>gnNews</h2>
        </Link>
        {menuOpen || window.innerWidth > 800 ?
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


