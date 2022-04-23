import React, { useReducer, useEffect } from 'react';
import ShortenForm from './ShortenForm';
import ShortenedList from './ShortenedList';
import shortenedUrlReducer from '../../reducers/ShortenedUrlReducer';
import Loading from '../UI/Loading';
import * as Types from '../../reducers/ActionTypes';
import './ShortenComponent.css';
import { v4 as uuidv4 } from 'uuid';
import Statistics from '../Statistics/Statistics';
import Boost from '../Boost/Boost';

const API_BASE = 'https://api.shrtco.de/v2/';
const KEY = 'shortened_urls';

function ShortenComponent() {
  const [state, dispatch] = useReducer(shortenedUrlReducer, {
    urls: [],
    error: null,
    isloading: false,
  });

  const saveToStorage = (url) => {
    if (localStorage.getItem(KEY)) {
      let currentUrls = JSON.parse(localStorage.getItem(KEY));
      localStorage.setItem(KEY, JSON.stringify([...currentUrls, url]));
    } else {
      localStorage.setItem(KEY, JSON.stringify([url]));
    }
  };

  const shorten_url = (url) => {
    fetch(`${API_BASE}shorten?url=${url}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.ok) {
          const url = {
            id: uuidv4(),
            full_short_link: json.result.full_short_link,
            original_link: json.result.original_link,
            copied: false,
          };

          saveToStorage(url);
          dispatch({
            type: Types.IS_URL_LOADED,
            payload: url,
          });
        } else {
          dispatch({
            type: Types.IS_URL_ERROR,
            payload: json.error,
          });
        }
      })
      .catch((err) =>
        dispatch({ type: Types.IS_URL_ERROR, payload: err.message })
      );
  };

  const handleFormSubmission = (url) => {
    dispatch({
      type: Types.IS_URL_LOADING,
    });

    shorten_url(url);
  };

  const handleCopyEvent = (id) => {
    const selectedLink = state.urls.find((item) => item.id === id);

    navigator.clipboard
      .writeText(selectedLink.full_short_link)
      .then((val) => {
        dispatch({
          type: Types.IS_COPIED,
          payload: id,
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (localStorage.getItem(KEY)) {
      dispatch({
        type: Types.URLS_LOADED,
        payload: JSON.parse(localStorage.getItem(KEY)),
      });
    }
  }, []);

  return (
    <div className="shorten-component-wrapper">
      <ShortenForm submitForm={handleFormSubmission} />
      {state.isloading && (
        <div className="loader-container">
          <Loading />
        </div>
      )}
      {state.urls.length > 0 && (
        <ShortenedList onClick={handleCopyEvent} items={state.urls} />
      )}
      {state.error && <p className="error_message">{state.error}</p>}
      <Statistics />
      <Boost />
    </div>
  );
}

export default ShortenComponent;
