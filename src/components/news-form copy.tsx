import React, { useRef, useState } from "react";


const NewsForm = () => {

  const formRef: any = useRef();
  const formTitleRef: any = useRef();
  const formTextRef: any = useRef();
  const formNameRef: any = useRef();
  const formLastnameRef: any = useRef();

  const [newsForm, setNewsForm] = useState({
    id: null,
    title: ``,
    description: ``,
    created_at: new Date,
    author: {
      name: ``,
      lastname: ``,
    }
});

  const handleSubmit = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    setNewsForm({
      id: Date.now(),
      title: formTitleRef.current.value,
      description: newsForm.description,
      created_at: new Date(),
      author: {
        name: newsForm.author.name,
        lastname: newsForm.author.lastname,
      }
    });

    console.log(newsForm);
    formRef.current.reset();
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <h2>Добавить новость</h2>
      <label>
        <input type="text" placeholder="Заголовок" ref={formTitleRef}/>
      </label>
      <textarea placeholder="Текст новости" value={newsForm.description} ></textarea>
      <label>
        <input type="text" placeholder="Имя" value={newsForm.author.name} />
      </label>
      <label>
        <input type="text" placeholder="Фамилия" value={newsForm.author.lastname} />
      </label>
      <button type="submit">Добавить новость</button>
    </form>
  );
};

export default NewsForm;