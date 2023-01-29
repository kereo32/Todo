import { SyntheticEvent, useEffect, useState } from 'react';
import addItem from './assets/addItem.svg';

function App() {
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
        <h4 className=" bg-light-red mt-5" key={index}>
          {item}
        </h4>
      ))}
    </div>
  );
}

export default App;
