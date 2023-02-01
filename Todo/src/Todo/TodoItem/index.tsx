import deleteItem from '../../assets/deleteItem.svg';
import editItem from '../../assets/editItem.svg';
import completeItem from '../../assets/completeItem.svg';
import React, { ReactNode, SyntheticEvent, useState } from 'react';
import useTodo from '../hooks/useTodo';

type Props = {
  index: number;
  item: ReactNode;
  todoItems: string[];
  currentItem: string;
  setTodoItems: (value: string[]) => void;
  setCurrentItem: (value: string) => void;
};

const TodoItem = ({ index, item, todoItems, currentItem, setTodoItems, setCurrentItem }: Props) => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleComplete = (): void => {
    setIsComplete((prevState) => !prevState);
  };
  const handleDelete = (e: SyntheticEvent): void => {
    setTodoItems(todoItems.filter((item) => todoItems[parseInt(e.target.name)] !== item));
  };
  const handleEdit = (e: SyntheticEvent): void => {
    setCurrentItem(todoItems[parseInt(e.target.name)]);
  };

  return (
    <div key={index} id={index.toString()} className="flex flex-wrap h-20 bg-blue-500 w-[50%] mt-10">
      <div className="flex justify-between w-full">
        <div className="flex ml-1 h-full justify-center items-center">
          <h4 className={isComplete ? 'line-through' : ''}>{item}</h4>
        </div>
        <div className="flex flex-wrap bg-violet-800 border-y-[1px] border-black">
          <button name={index.toString()} onClick={(e) => handleDelete(e)} className=" border-y-[0.5px] border-x-[0.5px] border-black">
            <img src={deleteItem} />
          </button>
          <button
            onClick={(e) => {
              handleEdit(e);
            }}
            name={index.toString()}
            className=" border-y-[0.5px] border-x-[0.5px] border-black"
          >
            <img src={editItem} />
          </button>
          <button name={index.toString()} onClick={handleComplete} className=" border-y-[0.5px] border-x-[0.5px] border-black">
            <img src={completeItem} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
