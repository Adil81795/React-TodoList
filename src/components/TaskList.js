import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../store/tasksSlice';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEdit = (id, newText) => {
    dispatch(editTask({ id, text: newText }));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => handleToggle(task.id)}>
            {task.completed ? 'Uncomplete' : 'Complete'}
          </button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <button onClick={() => {
            const newText = prompt('Edit task:', task.text);
            if (newText) handleEdit(task.id, newText);
          }}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
