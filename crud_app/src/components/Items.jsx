// src/components/Item.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem, deleteItem } from '../features/itemsSlice';

const Item = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);
  const [newSubject, setNewSubject] = useState(item.subject);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateItem({ id: item.id, name: newName }));
    dispatch(updateItem({ id: item.id, subject: newSubject }));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          />
          <input 
          type='text'/>
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          </>
      ) : (
        <>
        <span>{item.name}</span>
        <span>{item.subject}</span>
        </>
      )}
      {isEditing ? (
        <button onClick={handleUpdate}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => dispatch(deleteItem({ id: item.id }))}>Delete</button>
    </li>
  );
};

export default Item;
