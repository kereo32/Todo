import React, { SyntheticEvent, useState } from 'react';

type Props = {};

const useTodo = () => {
  const [todoItems, setTodoItems] = useState<Array<String>>([]);
  const [currentItem, setCurrentItem] = useState<String>('');

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    if (currentItem !== '') {
      setTodoItems((prevState) => {
        return [...prevState, currentItem];
      });
      setCurrentItem('');
      console.log(todoItems);
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    setCurrentItem(e.target.value);
  };
  return { todoItems, currentItem, handleClick, handleChange } as const;
};

export default useTodo;
