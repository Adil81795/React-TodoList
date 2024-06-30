import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) task.text = action.payload.text;
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
