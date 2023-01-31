import React, { SyntheticEvent, useState } from 'react';
import addItem from '../assets/addItem.svg';
import useTodo from './hooks/useTodo';
import TodoItem from './TodoItem';

type Props = {};

const Todo = (props: Props) => {
  const { handleChange, handleClick, todoItems, currentItem } = useTodo();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div>
        <form className="inline-flex">
          <div className="flex flex-col items-center justify-center">
            <label className=" mb-3">Enter your item</label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              name="todoItem"
            />
          </div>
          <button
            onClick={(e) => {
              handleClick(e);
            }}
            className="h-3/5 mt-9 ml-2"
          >
            <img src={addItem} />
          </button>
        </form>
      </div>
      {todoItems.map((item, index) => (
        <TodoItem index={index} item={item} />
      ))}
    </div>
  );
};

export default Todo;
