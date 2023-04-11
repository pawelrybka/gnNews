import { useParams } from 'react-router-dom';
import styles from './Main.module.css'

function Main() {
  
  const { countryId } = useParams();
  
  if (countryId === '') {
    return (
      <div className={styles.main}>
        <p>Empty</p>
      </div>
    );
  }

}

export default Main

