import React, { useEffect } from 'react';
import { NewsItem } from './NewsItem';
import { NewsProps } from '../containers/News';

const News: React.FC<NewsProps> = (props) => {

  useEffect(() =>{
    props.getNews();
  });

  return (
    <div className="news">
      {props.news && props.news.map(item =>(
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default News;