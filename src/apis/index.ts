import {useEffect} from 'react';
import {AxiosInstance} from '../config';
import useMultiState from '../hooks/useMultiState';

const headlineUrl = 'top-headlines';
const everythingUrl = 'everything'
const defaultParams = {
  // limit: 10,
  country: 'us',
};

interface StateProps {
  loading: boolean;
  totalResults: number;
  articles: {
    source: {
      id: string;
      name: string;
    };
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}

const initialState = {
  loading: false,
};
const useTopHeadlines = ({category,pageSize = 10}: any={}) => {
  const {state: STATE, setState} = useMultiState({...initialState});

  const state: StateProps = STATE;

  const {articles, totalResults, loading} = state;

  useEffect(() => {
    setState({loading: true});
    let didCancel = false;

    AxiosInstance.get(headlineUrl, {
      params: {
        pageSize,
        category,
        ...defaultParams,
      },
    })
      .then(({data}: any) => {
        if (!didCancel) {
          const {articles, totalResults} = data;
          console.log('articles', Object.keys(data));
          setState({articles, totalResults, loading: false});
        }
      })
      .catch((err: any) => {
        if (!didCancel) {
          console.log('error,!>>>', err);
          setState({loading: false});
        }
      });
    return () => {
      didCancel = true;
    };
  }, [category, pageSize]);
  return {articles, totalResults, loading};
};

const useEverything = ({category, pageSize = 10}: any={}) => {
  const {state: STATE, setState} = useMultiState({...initialState});

  const state: StateProps = STATE;

  const {articles, totalResults, loading} = state;

  useEffect(() => {
    setState({loading: true});
    let didCancel = false;

    AxiosInstance.get(everythingUrl, {
      params: {
        pageSize,
        category,
        ...defaultParams,
      },
    })
      .then(({data}: any) => {
        if (!didCancel) {
          const {articles, totalResults} = data;
          console.log('articles', Object.keys(data));
          setState({articles, totalResults, loading: false});
        }
      })
      .catch((err: any) => {
        if (!didCancel) {
          console.log('error,!>>>', err);
          setState({loading: false});
        }
      });
    return () => {
      didCancel = true;
    };
  }, [category, pageSize]);
  return {articles, totalResults, loading};
};

export {useTopHeadlines, useEverything};
