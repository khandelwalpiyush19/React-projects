// src/components/AddItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/itemsSlice';
import { nanoid } from 'nanoid';

const AddItem = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      dispatch(addItem({ id: nanoid(), ...formData }));
      setFormData({ name: '', email: '', phone: '' });
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <input
        type="text"
        placeholder="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
