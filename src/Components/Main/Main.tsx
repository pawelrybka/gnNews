import styles from './Main.module.css'
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className={styles.main}>
      <Outlet/>
    </div>
  );
}

export default Main

