import {connect} from 'react-redux';
import {StateType} from '../types/types';

interface NewsItemPropsType {
  item: {
    id: number,
    title: string,
    description: string,
    created_at: Date,
    author: {
      name: string,
      lastname: string,
    }
  }
};

const NewsItem = ({item}: NewsItemPropsType) => {

  const date = new Date(item.created_at);
  const itemDate = date.toLocaleDateString(`ru`, {day: `numeric`, month: `long`, year: `numeric`});
  const itemTime = date.toLocaleTimeString(`ru`, {hour: `numeric`, minute: `numeric`});
  return (
    <>
    <hr />
    <div className="hor-padding">
      <p>{`${itemDate} ${itemTime}`}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.author.name == `` &&  item.author.lastname == `` ? `Анонимный автор` : `Автор: ${item.author.name} ${item.author.lastname}`}</p>
    </div>
    </>
  );
};

export default NewsItem;