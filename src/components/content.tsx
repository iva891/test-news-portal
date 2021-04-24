import React, {useEffect} from 'react';
import NewsList from './news-list';
import Preloader from './preloader';
import {API_URL} from '../utils/const';
import {setNews, setLoading} from '../store/action';
import {connect} from 'react-redux';
import {StateType} from '../types/types';
import NewsForm from './news-form';

 interface ContentPropsType {
  loadNews: (e: any[]) => void, 
  loading: boolean, 
  setLoading: (e: boolean) => void,
}

const Content = ({loadNews, loading, setLoading}: ContentPropsType) => {

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(response => {
      response.data.articles && loadNews(response.data.articles);
        setLoading(false);
    });
}, []);

  return (
    < div className="page__content">
      {loading ?
      <Preloader /> :
      <div className="page__wrapper">
        <NewsList />
        <NewsForm />
      </div>

    }
    
  </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  loadNews: (news: any[]) => dispatch(setNews(news)),
  setLoading: (status: boolean) => dispatch(setLoading(status)),
});

export {Content};
export default connect(mapStateToProps, mapDispatchToProps)(Content);