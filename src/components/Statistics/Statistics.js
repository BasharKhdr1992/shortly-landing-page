import React from 'react';
import assets from '../../assets';
import StatisticsCard from './StatisticsCard';
import { v4 as uuidv4 } from 'uuid';
import './Statistics.css';

const statistics = [
  {
    id: uuidv4(),
    title: 'Brand Recognition',
    icon: assets.brandRecognition,
    description: `Boost your brand recognition with each click. Generic links don’t
    mean a thing. Branded links help instil confidence in your content.`,
  },
  {
    id: uuidv4(),
    title: 'Detailed Records',
    icon: assets.detailedRecords,
    description: `Gain insights into who is clicking your links. Knowing when and where
    people engage with your content helps inform better decisions.`,
  },
  {
    id: uuidv4(),
    title: 'Fully Customizable',
    icon: assets.customizable,
    description: `Improve brand awareness and content discoverability through customizable
    links, supercharging audience engagement.`,
  },
];

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="stats-text">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="card-list">
        {statistics.map((card, index) => {
          return (
            <StatisticsCard
              line={index !== statistics.length - 1}
              marginTop={`${index * 5}%`}
              key={card.id}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
