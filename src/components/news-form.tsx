import React, { useRef, useState } from "react";
import {setUserNews} from '../store/action';
import {connect} from 'react-redux';

interface NewsFormPropsType {
  setUserNews: (e: any) => void, 
}


const NewsForm = ({setUserNews}: NewsFormPropsType) => {

  const formRef: any = useRef();

  const [newsForm, setNewsForm] = useState({
    id: null,
    title: ``,
    description: ``,
    created_at: null,
    author: {
      name: ``,
      lastname: ``,
    }
});

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();

    setUserNews({
      ...newsForm,
      id: Date.now().toString(36).substr(2, 7),
      created_at: new Date(),
    });

    console.log(Math.random().toString(36).substr(2, 12));
    // setUserNews(newsForm);
    
    formRef.current.reset();
    setNewsForm({
      id: null,
      title: ``,
      description: ``,
      created_at: null,
      author: {
        name: ``,
        lastname: ``,
      }
  });
  };

  const handleInputChange = (evt: { target: { name: string; value: string; }; }) => {
    const {name, value} = evt.target;
    setNewsForm({...newsForm, [name]: value});
  };

  const handleInputChangeAuthor = (evt: { target: { name: string; value: string; }; }) => {
    const {name, value} = evt.target;
    setNewsForm({
      ...newsForm, 
      author:{
        ...newsForm.author,
        [name]: value
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="page__form form hor-padding">
      <h2>Добавить новость</h2>
      <label>
        <p className="form__input-text">Новость</p>
        <input className="form__input" type="text" placeholder="Заголовок" name="title" value={newsForm.title} onChange={handleInputChange} required/>
      </label>
      <textarea placeholder="Текст новости" name="description" value={newsForm.description} onChange={handleInputChange} required></textarea>
      <div>
        <label>
          <p className="form__input-text">Автор</p>
          <input className="form__input" type="text" placeholder="Имя" name="name" value={newsForm.author.name} onChange={handleInputChangeAuthor} />
        </label>
        <label>
          <input className="form__input" type="text" placeholder="Фамилия" name="lastname" value={newsForm.author.lastname} onChange={handleInputChangeAuthor} />
        </label>
      </div>
      <button className="form__btn" type="submit">Добавить новость</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  setUserNews: (newsItem: any) => dispatch(setUserNews(newsItem)),
});

export {NewsForm};
export default connect(null, mapDispatchToProps)(NewsForm);