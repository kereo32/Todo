import deleteItem from '../../assets/deleteItem.svg';
import editItem from '../../assets/editItem.svg';
import React, { ReactNode, SyntheticEvent, useEffect, useState } from 'react';

//TODO
//1 - Arka arkaya aynı renk gelmesin
//2 - Bir completed itemi silerken bir sonraki iteme completed statei geçiyor bunu engelle
//3 - Edit eklenebilir

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
  const [randomColor, setRandomColor] = useState<string>('bg-pepe-yellow');

  const handleComplete = (): void => {
    setIsComplete((prevState) => !prevState);
  };
  const handleDelete = (e: SyntheticEvent): void => {
    setTodoItems(todoItems.filter((item) => todoItems[parseInt(e.target.name)] !== item));
  };
  const handleEdit = (e: SyntheticEvent): void => {
    setCurrentItem(todoItems[parseInt(e.target.name)]);
  };

  useEffect(() => {
    setRandomColor((): string => {
      let colors = ['bg-pepe-yellow', 'bg-pepe-purple', 'bg-pepe-green', 'bg-pepe-cyen'];

      return colors[Math.floor(Math.random() * colors.length)];
    });
  }, []);
  return (
    <div key={index} id={index.toString()} className={`flex h-16 ${randomColor} w-[50%] -mt-8 rounded-2xl z-[${40 + index * 10}] hover:translate-y-2 `}>
      <div className="flex w-full ml-2">
        <button name={index.toString()} onClick={handleComplete}>
          <div
            className={isComplete ? 'ml-1 w-8 h-6 border-black border-[1px] bg-black rounded-xl' : 'ml-1 w-8 h-6 border-black border-[1px] rounded-xl'}
          ></div>
        </button>
        <div className="flex ml-2 w-full h-full items-center">
          <h4 className={isComplete ? 'line-through' : ''}>{item}</h4>
        </div>
      </div>
      <div className="flex flex-row rounded-2xl border-black gap-2">
        <button className="mr-4" name={index.toString()} onClick={(e) => handleDelete(e)}>
          <img src={deleteItem} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
