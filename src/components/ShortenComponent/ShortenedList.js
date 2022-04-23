import React from 'react';
import ShortenedUrl from './ShortenedUrl';
import './ShortenedList.css';

const ShortenedList = ({ items, onClick }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <ShortenedUrl onClick={onClick} key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ShortenedList;
