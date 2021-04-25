import {connect} from 'react-redux';
import {StateType} from '../types/types';
import NewsItem from './news-item';

interface NewsListPropsType {
  news: any[]
};

const NewsList = ({news}: NewsListPropsType) => {

  let quantityNewsText: string;

  const setQuantityNewsText = (): string => {
    if(news.length % 10 === 1 && news.length !== 11) {
      return quantityNewsText = `новость`;
    }
    if(news.length % 10 < 5 && news.length % 10 !== 0) {
      if(news.length > 10 && news.length < 15) {
        return quantityNewsText = `новостей`;
      } else {
        return quantityNewsText = `новости`;
      }
    }
    return quantityNewsText = `новостей`;
  };

  return (
    <div className="page__news-wrapper">
      {news.length === 0 ?
        <h2 className="hor-padding">Новостей нет</h2> :
        <h2 className="hor-padding">{`${news.length}`} {setQuantityNewsText()}</h2>  
      }
      <div className="page__news">
          {news.map((item) =>
              <NewsItem item={item} key={item.id} />
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateType) => ({
  news: state.news,
});

export {NewsList};
export default connect(mapStateToProps, null)(NewsList);