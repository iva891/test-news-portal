import {NewsItemPropsType} from '../types/types';

const NewsItem = ({item}: NewsItemPropsType) => {

  const date: Date = new Date(item.created_at);
  const itemDate: string = date.toLocaleDateString(`ru`, {day: `numeric`, month: `long`, year: `numeric`});
  const itemTime: string = date.toLocaleTimeString(`ru`, {hour: `numeric`, minute: `numeric`});
  return (
    <>
      <hr />
      <div className="hor-padding">
        <p>{`${itemDate} ${itemTime}`}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.author.name === `` &&  item.author.lastname === `` ? `Анонимный автор` : `Автор: ${item.author.name} ${item.author.lastname}`}</p>
      </div>
    </>
  );
};

export default NewsItem;