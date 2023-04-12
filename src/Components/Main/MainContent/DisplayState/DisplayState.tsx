import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingState from '../LoadingState/LoadingState';
import styles from './DisplayState.module.css';

interface NewsArticle {
  title: string;
  country: string;
}

function DisplayContent() {
  
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);

  const country = useParams();

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2041667435147198834bd8ace4892392a4705&country=${country.id}`);
    const data = await response.json();
    setNewsData(data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [country]);

  return (
    <div className={styles.displaycontent}>
      {isLoading ? (
        <LoadingState />
      ) : (
        newsData.map((article, index) => (
          <div key={index} className={styles.article}>
            <h3>{article.title}</h3>
            <p>{article.country}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DisplayContent;
