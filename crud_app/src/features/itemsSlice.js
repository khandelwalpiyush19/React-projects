// src/features/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addItem, updateItem, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
