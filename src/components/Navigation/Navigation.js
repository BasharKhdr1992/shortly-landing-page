import React, { useState } from 'react';
import assets from '../../assets';
import Button from '../UI/Button';
import DropDown from '../UI/DropDown';
import './Navigation.css';

const Navigation = () => {
  const [dropDown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <ul className="navbar">
      <li className="navlink">
        <button className="btn-link">
          <img src={assets.logo} alt="Shortly logo" />
        </button>
      </li>
      <li className="navlink collapse">
        <button className="btn-link">Features</button>
      </li>
      <li className="navlink collapse">
        <button className="btn-link">Pricing</button>
      </li>
      <li className="navlink collapse">
        <button className="btn-link">Resources</button>
      </li>
      <li className="navlink right collapse">
        <Button className={'btn-form'}>Sign up</Button>
      </li>
      <li className="navlink right collapse">
        <button className="btn-link">Login</button>
      </li>
      <li className="navlink right menu">
        <button className="btn-link" onClick={toggleDropdown}>
          <img src={assets.iconMenu} alt="icon menu" />
        </button>
      </li>
      {dropDown && <DropDown />}
    </ul>
  );
};

export default Navigation;
