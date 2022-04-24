import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './ShortenForm.css';

const ShortenForm = ({ submitForm }) => {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const userInput = e.target.value;

    setUrl(userInput);
  };

  const handleClick = () => {
    if (url.trim() === '') {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    submitForm(url);
  };

  return (
    <div className="shorten-form">
      <Input
        valid={isValid}
        type={'text'}
        placeholder="Shorten a link here!"
        onChange={handleInputChange}
        value={url}
      />
      <Button className={'btn-form mt'} onClick={handleClick}>
        Shorten it
      </Button>
    </div>
  );
};

export default ShortenForm;
