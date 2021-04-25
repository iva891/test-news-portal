import {NewsItemType} from '../types/types';
import {removeNewsItem} from '../store/action';
import {connect} from 'react-redux';

type NewsItemPropsType = {
  item: NewsItemType,
  removeNewsItem: (e: any) => void, 
}

const NewsItem = ({item, removeNewsItem}: NewsItemPropsType) => {

  const date: Date = new Date(item.created_at);
  const itemDate: string = date.toLocaleDateString(`ru`, {day: `numeric`, month: `long`, year: `numeric`});
  const itemTime: string = date.toLocaleTimeString(`ru`, {hour: `numeric`, minute: `numeric`});

  const removeItem = () => {
    removeNewsItem(item.id);
  };

  return (
    <>
      <hr />
      <div className="hor-padding">
        <p>{`${itemDate} ${itemTime}`}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.author.name === `` &&  item.author.lastname === `` ? `Анонимный автор` : `Автор: ${item.author.name} ${item.author.lastname}`}</p>
        <button className="form__btn form__btn--del-item" onClick={removeItem}>Удалить</button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  removeNewsItem: (id: number | string) => dispatch(removeNewsItem(id)),
});

export {NewsItem};
export default connect(null, mapDispatchToProps)(NewsItem);