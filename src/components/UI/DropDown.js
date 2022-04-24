import React from 'react';
import './DropDown.css';
import Button from './Button';
import DropDownDivider from './DropDownDivider';

const DropDown = () => {
  return (
    <div className="dropdown">
      <ul className="dd-list">
        <li>
          <button className="dd-link">Features</button>
        </li>
        <li>
          <button className="dd-link">Pricing</button>
        </li>
        <li>
          <button className="dd-link">Resources</button>
        </li>
        <li>
          <DropDownDivider />
        </li>
        <li>
          <button className="dd-link">Login</button>
        </li>
        <li>
          <Button className={'block'}>Sign up</Button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
