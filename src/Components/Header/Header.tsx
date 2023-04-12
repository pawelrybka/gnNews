import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h2>gnNews</h2>
      </Link>
    </div>
  )
}

export default Header


