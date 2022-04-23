import React from 'react';
import './ShortenedUrl.css';
import Button from '../UI/Button';
import DropDownDivider from '../UI/DropDownDivider';

const ShortenedUrl = ({ item, onClick }) => {
  return (
    <div className="item">
      <p className="original-link">{item.original_link}</p>
      <DropDownDivider />
      <p className="shortened-link">
        <a href={item.full_short_link} rel="noreferrer" target="_blank">
          {item.full_short_link}
        </a>
      </p>
      <Button
        onClick={() => onClick(item.id)}
        className={`btn-form ${item.copied && 'copied'}`}
      >
        {item.copied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  );
};

export default ShortenedUrl;
