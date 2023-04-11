import { useState, useEffect } from 'react'
import styles from './Footer.module.css'

function Footer() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  
  return (
    <div className={styles.footer}>
      <h3>Footer</h3>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Footer
