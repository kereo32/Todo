import React, { ReactNode } from 'react';

type Props = {
  index: number;
  item: ReactNode;
};

const TodoItem = ({ index, item }: Props) => {
  return (
    <div>
      <h4 className=" bg-light-red mt-5" key={index}>
        {item}
      </h4>
    </div>
  );
};

export default TodoItem;
