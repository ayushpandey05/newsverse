import React, {createContext, useContext} from 'react';
import useMultiState from '../hooks/useMultiState';
import deepEqual from '../utils/deepEqual';

const StoreContext = createContext();

const StoreProvider: React.FC = ({children}) => {
  const {state, setState} = useMultiState({});

  return (
    <StoreContext.Provider value={{state, setState}}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const {state, setState} = useContext(StoreContext);
  return {state, setState};
};

const useBookmarkStore = () => {
  const {state, setState} = useStore();
  const {bookmarks} = state || {};

  const addBookmark = (article: any) => {
    const tempBookmark = Array.isArray(bookmarks) ? [...bookmarks] : [];
    tempBookmark[tempBookmark.length] = article;
    setState({bookmarks: tempBookmark});
  };

  const checkBookMark = (article: any) => {
    let isBookmark = false;
    if (Array.isArray(bookmarks) && bookmarks.length) {
      let articelIndex = bookmarks.findIndex(item => deepEqual(item, article));
      if (articelIndex !== -1) {
        isBookmark = true;
      }
    }
    return isBookmark;
  };

  const removeBookmark = (article: any) => {
    const tempBookmark = Array.isArray(bookmarks) ? [...bookmarks] : [];
    if (tempBookmark.length) {
      let articleIndex = tempBookmark.findIndex(item =>
        deepEqual(item, article),
      );
      tempBookmark.splice(articleIndex, 1);
      setState({bookmarks: tempBookmark});
    }
  };

  return {addBookmark, removeBookmark, checkBookMark, bookmarks};
};

export {StoreContext, StoreProvider, useStore, useBookmarkStore};
