import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css'

function Sidebar() {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800 && sidebarVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [sidebarVisible]);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const toggleSidebar = () => {
    if (window.innerWidth < 800) {
      setSidebarVisible(!sidebarVisible)
      setIsRotated(!isRotated)
    }
  };
  
  return (
  <div className={styles.sidebar}>
    <div className={styles.menu} onClick={toggleSidebar}>
      <IoIosArrowForward size={20} className={`${styles.icon} ${isRotated ? styles.rotated : ''}`}/>
      <p>Menu</p>
    </div>
    {(sidebarVisible || window.innerWidth >= 800) && 
      <div className={styles.sidebar__content}>
        <h3>Countries:</h3>
        <Link to="/country/pl" onClick={toggleSidebar}>
          <div className={styles.country}>
            <img src="/flags/pl.png" alt="" />
            <span>Poland</span>
          </div>
        </Link>
        <Link to="/country/us" onClick={toggleSidebar}>
          <div className={styles.country}>
            <img src="/flags/us.png" alt="" />
            <span>America</span>
          </div>
        </Link>
        <Link to="/country/ru" onClick={toggleSidebar}> 
          <div className={styles.country}>
            <img src="/flags/ru.png" alt="" />
            <span>Russia</span>
          </div>
        </Link>
        <Link to="/country/br" onClick={toggleSidebar}>
          <div className={styles.country}>
            <img src="/flags/br.png" alt="" />
            <span>Brazil</span>
          </div>
        </Link>
        <Link to="/country/de" onClick={toggleSidebar}>
          <div className={styles.country}>
            <img src="/flags/de.png" alt="" />
            <span>Germany</span>
          </div>
        </Link>
        <Link to="/country/sk" onClick={toggleSidebar}>
          <div className={styles.country}>
            <img src="/flags/sk.png" alt="" />
            <span>Slovakia</span>
          </div>
        </Link>
        <Link to="/country/ch" onClick={toggleSidebar}>
          <div className={styles.country}>
            <img src="/flags/ch.png" alt="" />
            <span>Switzerland</span>
          </div>
        </Link>
      </div>
    }
  </div>
  )
}

export default Sidebar

