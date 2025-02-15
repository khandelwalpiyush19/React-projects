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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name" // Add name attribute
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email" // Add name attribute
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone" // Add name attribute
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;