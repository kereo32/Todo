import React, { SyntheticEvent, useState } from 'react';

const useTodo = () => {
  const [todoItems, setTodoItems] = useState<Array<string>>([]);
  const [currentItem, setCurrentItem] = useState<string>('');

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    if (currentItem !== '') {
      setTodoItems((prevState) => {
        return [...prevState, currentItem];
      });
      setCurrentItem('');
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    setCurrentItem(e.target.value);
  };
  return { todoItems, currentItem, handleClick, handleChange, setTodoItems, setCurrentItem } as const;
};

export default useTodo;
