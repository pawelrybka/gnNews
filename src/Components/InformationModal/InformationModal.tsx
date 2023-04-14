import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './InformationModal.module.css'

interface NewsArticle {
  title: string
  country: string
  description: string
  link: string
}

interface Props {
  informationModalVisible: boolean
  setInformationModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  selectedArticle: NewsArticle | null;
}

function InformationModal({ informationModalVisible, setInformationModalVisible, selectedArticle }: Props) {
  
  return (
    <>
      <div className={styles.informationmodal}>
        <div className={styles.informationmodal__header}>
          <h3>{selectedArticle?.title}</h3>
          <button onClick={() => setInformationModalVisible(!informationModalVisible)}>
            <AiOutlineClose size={20}/>
          </button>
        </div>
        <div className={styles.informationmodal__content}>
          <p>{selectedArticle?.description}</p>
        </div>
        <div className={styles.informationmodal__footer}>
          <button onClick={() => setInformationModalVisible(!informationModalVisible)}>Return</button>
          <Link to={selectedArticle?.link ? selectedArticle.link : ''} target="_blank">
            <button>Go to the article!</button>
          </Link>
        </div>
      </div>
      <Backdrop/>
    </>
  )
}

export default InformationModal

