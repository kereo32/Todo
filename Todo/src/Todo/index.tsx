import React, { SyntheticEvent, useState } from 'react';
import addItem from '../assets/addItem.svg';
import useTodo from './hooks/useTodo';
import TodoItem from './TodoItem';

type Props = {};

const Todo = (props: Props) => {
  const { handleChange, handleClick, todoItems, currentItem, setTodoItems, setCurrentItem } = useTodo();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <form className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center content-center w-2/5">
            <label className=" mb-3 text-white font-Arimo text-3xl tracking-[0.16em] drop-shadow-lg">WHAT'S YOUR PLAN ?</label>
            <input
              className="bg-input-grey w-full rounded-3xl mt-6 h-10 shadow-inner pl-2"
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              name="todoItem"
              value={currentItem}
            />
          </div>
          <button
            className="hidden"
            onClick={(e) => {
              handleClick(e);
            }}
          ></button>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-12">
        {todoItems.map((item, index) => (
          <TodoItem setCurrentItem={setCurrentItem} setTodoItems={setTodoItems} todoItems={todoItems} currentItem={currentItem} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
