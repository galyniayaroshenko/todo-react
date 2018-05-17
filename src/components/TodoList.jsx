import React from 'react';

import Item from './Item';

function TodoList({ todoList, onHandleList }) {
  return (
    <div>
      {
        todoList.map(item => {
          return (
            <div key={item.id}>
              <Item onHandleItem={onHandleList} itemData={item} />
            </div>
          );
        })
      }
    </div>
  );
};

export default TodoList;
