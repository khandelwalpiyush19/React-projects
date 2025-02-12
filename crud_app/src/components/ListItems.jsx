// src/components/ItemList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Items';

const ListItems = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListItems;
