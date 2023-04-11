import { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
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
        <span>Poland</span>
        <span>America</span>
        <span>Russia</span>
        <span>Brazil</span>
        <span>England</span>
      </div>
    }
  </div>
  )
}

export default Sidebar

