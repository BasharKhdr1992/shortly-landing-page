import React from 'react';
import Line from '../UI/Line';
import './StatisticsCard.css';

const StatisticsCard = ({ card, marginTop, line }) => {
  return (
    <div className="stats-card-wrapper" style={{ marginTop }}>
      {line && <Line />}
      <div className="stats-card">
        <div class="card-img-wrapper">
          <img src={card.icon} alt={card.title} />
        </div>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
