import React from 'react';

import CheckBox from './CheckBox';

function Item({ itemData, onHandleItem }) {
  return (
    <div>
      <CheckBox
        id={itemData.id}
        isChecked={itemData.completed}
        label={itemData.text}
        onHangleCheckBox={onHandleItem}
      />
    </div>
  );
}

export default Item;
