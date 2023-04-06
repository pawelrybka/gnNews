import { useState } from 'react';
import styles from './Second.module.css';

function Second() {
  
  const [visible, setVisible] = useState(false)
  
  return (
    <div className={styles.second}>
      <button onClick={() => setVisible(!visible)}>Change</button>
      {visible &&  <div className={styles.square}>Yoo</div>}
    </div>
  )
}

export default Second

