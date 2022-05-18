import {useEffect, useState} from 'react';
import {AxiosInstance} from '../config';
import useMultiState from '../hooks/useMultiState';
import usePrevious from '../hooks/usePrevious';

const headlineUrl = 'top-headlines';
const everythingUrl = 'everything'
const defaultParams = {
  // limit: 10,
  country: 'us',
};

interface StateProps {
  loading: boolean;
  totalResults?: number;
  articles?: {
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
  page?: number;
}


interface StoreProps {
  state: StateProps,
  setState: (arg1: any)=>any
}

const initialState = {
  loading: false,
  page: 1
};
const useTopHeadlines = ({category,pageSize = 10}: any={}) => {
  const {state: STATE, setState}: any = useMultiState({...initialState});
  const [loadMoreData, setLoadMoreData] = useState(false)
  const [reloadData, setReloadData]=useState(false)
  const state: StateProps = STATE;

  const {articles = [], totalResults, loading, page: pageNumber}: any = state;

  const canLoadMore = totalResults > articles?.length
console.log('@@@@@@@@@@@',canLoadMore, totalResults)
  const loadMore = ()=>{
    if(canLoadMore){
      setLoadMoreData(!loadMoreData)
    }
  }

  const reload = ()=>{
    setReloadData(!reloadData)
  }

  const prevLoadMoreData = usePrevious(loadMoreData)
  const prevReloadData = usePrevious(reloadData)

  useEffect(() => {
    setState({loading: true});
    let didCancel = false;
    let page = pageNumber 
    const isLoadingMore = prevLoadMoreData !== loadMoreData 
    const isReload = prevReloadData !== reloadData
    if(isLoadingMore){
      page = page + 1
    }else if(isReload){
      page = 1
    }


    AxiosInstance.get(headlineUrl, {
      params: {
        ...defaultParams,
        pageSize,
        category,
        page
      },
    })
      .then(({data}: any) => {
        if (!didCancel) {
          let {articles: newArticles, totalResults: newTotalResults} = data;
          if(isLoadingMore){
            newArticles = [...articles, ...newArticles]
          }
          // console.log('articles', Object.keys(data));
          setState({articles: newArticles, totalResults: newTotalResults, loading: false, page});
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
  }, [category, pageSize, loadMoreData, reloadData]);
  return {articles, totalResults, loading, loadMore, canLoadMore, reload};
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
