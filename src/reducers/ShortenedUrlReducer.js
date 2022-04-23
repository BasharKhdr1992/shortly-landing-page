import * as Types from './ActionTypes';
const shortenedUrlReducer = (state, action) => {
  switch (action.type) {
    case Types.IS_URL_LOADING:
      return { ...state, isloading: true };
    case Types.URLS_LOADED:
      return { ...state, urls: action.payload };
    case Types.IS_URL_LOADED:
      return {
        ...state,
        isloading: false,
        error: null,
        urls: [...state.urls, action.payload],
      };
    case Types.IS_URL_ERROR:
      return {
        ...state,
        isloading: false,
        error: action.payload,
      };
    case Types.IS_COPIED:
      return {
        ...state,
        urls: state.urls.map((item) =>
          item.id === action.payload
            ? { ...item, copied: true }
            : { ...item, copied: false }
        ),
      };
    default:
      throw new Error('something went wrong!');
  }
};

export default shortenedUrlReducer;
