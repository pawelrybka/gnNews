import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Redux/displaySlice';
import InformationModal from '../../../InformationModal/InformationModal';
import LoadingState from '../LoadingState/LoadingState';
import styles from './DisplayState.module.css';

interface NewsArticle {
  title: string
  country: string
  description: string
  link: string
}

function DisplayContent() {

  const country = useParams();
  
  const displayColumn = useSelector((state: RootState) => state.display.displayColumn);

  const [isLoading, setIsLoading] = useState(false);
  
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  
  const [informationModalVisible, setInformationModalVisible] = useState(false)

  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_205068f75b7f55a4f6fdc259d2b09a3b9d397&country=${country.id}`);
    const data = await response.json();
    setNewsData(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [country]);

  useEffect(() => {
    if (informationModalVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [informationModalVisible]);
  
  return (
    <div className={`${styles.displaycontent} ${displayColumn ? styles.rows : ''}`}>
      {isLoading ? 
        <LoadingState />
        : 
        newsData.map((article, index) => (
          <div key={index} className={styles.article} onClick={() => {
            setSelectedArticle(article)
            setInformationModalVisible(!informationModalVisible)
          }}>
            <h3>{article.title}</h3>
            <p>{article.country}</p>
          </div>
        ))
      }
      {informationModalVisible && 
        <InformationModal
          informationModalVisible={informationModalVisible} 
          setInformationModalVisible={setInformationModalVisible}
          selectedArticle={selectedArticle}
        />
      }
    </div>
  );
}

export default DisplayContent;
