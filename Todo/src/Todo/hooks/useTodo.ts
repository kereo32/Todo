import React, { SyntheticEvent, useEffect, useState } from 'react';

const useTodo = () => {
  const [todoItems, setTodoItems] = useState<Array<string>>(JSON.parse(localStorage.getItem('todoItems')) || []);
  const [currentItem, setCurrentItem] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(todoItems.indexOf(currentItem));
    if (currentItem !== '') {
      setTodoItems((prevState) => {
        return [...prevState, currentItem];
      });

      setCurrentItem('');
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    console.log(e.target.name);
    setCurrentItem(e.target.value);
  };
  return { todoItems, currentItem, handleClick, handleChange, setTodoItems, setCurrentItem } as const;
};

export default useTodo;
