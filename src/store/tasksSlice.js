import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
      saveState(state);
    },
    deleteTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveState(state);
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveState(state);
      }
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        saveState(state);
      }
    }
  }
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
