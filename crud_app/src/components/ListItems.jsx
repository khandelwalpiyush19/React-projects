// src/components/ItemList.js
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import Item from './Items';
import { removeItem,updateItem } from '../features/itemsSlice';
// import ../App.css;

const ListItems = () => {

  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  const handleUpdate = (item) => {
    const updatedItem = {...item,quantity: item.quantity + 1};
    dispatch(updateItem(updatedItem));
  };  
  return (
    <>
    <table className='table'>
      <th>
        <td>Name</td>
        <td>Email</td>
        <td>Phone no.</td>
      </th>
      <tr>
        <td>piyush khandelwal</td>
        <td>piyush@gmail.com</td>
        <td>7062111518</td>
      </tr>
    </table>
    <ul>
      {items.map((item)=>(
        <li key={item.id}>
          <span>{item.name }</span>
          <span>{item.email }</span>
          <span>{item.phone }</span>
          {/* <span>{item.id }</span> */}
          </li>
      ))}
    </ul>
      </>
  );
};

export default ListItems;
