import React from 'react';
import { INewsItem } from '../models/news';

interface INewsItemProps {
  data: INewsItem,
}

const NewsItem: React.FC<INewsItemProps> = ({data}) => {

  return (
    <article>
      <br/>
      <div>
        <h1>{data.title}</h1>
        <p><u>{data.timestamp.toLocaleDateString()}</u></p>
      </div>
      <div>{data.text}</div>
    </article>
  );
}

export { NewsItem }