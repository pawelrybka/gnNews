import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsGrid } from 'react-icons/bs';
import { BsViewStacked } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleColumn } from '../../Redux/displaySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/displaySlice';
import styles from './Header.module.css'

function Header() {
  
  const dispatch = useDispatch();

  const displayColumn = useSelector((state: RootState) => state.display.displayColumn);

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
            <li onClick={() => dispatch(toggleColumn())}>
              {displayColumn ? 
                <BsViewStacked size={20}/> 
                  : 
                <BsGrid size={20}/> 
              }
            </li>
            <Link to="https://github.com/pawelrybka/gnNews">
              <li>Repository</li>
            </Link>
          </ul>
          : 
          null
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


