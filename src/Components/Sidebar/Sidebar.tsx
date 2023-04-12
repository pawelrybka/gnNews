import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css'

function Sidebar() {
  
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isRotated, setIsRotated] = useState(false);

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
    setSidebarVisible(!sidebarVisible);
    setIsRotated(!isRotated)
    document.body.style.overflow = sidebarVisible ? 'auto' : 'hidden';
  };
  
  return (
  <div className={styles.sidebar}>
    <div className={styles.menu} onClick={toggleSidebar}>
      <IoIosArrowForward size={20} className={`${styles.icon} ${isRotated ? styles.rotated : ''}`}/>
      <p>Menu</p>
    </div>
    {(sidebarVisible || screenWidth >= 800) && 
      <div className={styles.sidebar__content}>
        <h3>Countries:</h3>
        <Link to="/country/pl">
          <span>Poland</span>
        </Link>
        <Link to="/country/us">
          <span>America</span>
        </Link>
        <Link to="/country/ru">
          <span>Russia</span>
        </Link>
        <Link to="/country/br">
          <span>Brazil</span>
        </Link>
        <Link to="/country/de">
          <span>Germany</span>
        </Link>
        <Link to="/country/sk">
          <span>Slovakia</span>
        </Link>
        <Link to="/country/ch">
          <span>Switzerland</span>
        </Link>
      </div>
    }
  </div>
  )
}

export default Sidebar
