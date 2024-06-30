import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../store/tasksSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

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
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={() => {
                  const newText = prompt('Edit task:', task.text);
                  if (newText) handleEdit(task.id, newText);
                }}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              onClick={() => handleToggle(task.id)}
            />
            <ListItemText
              primary={task.text}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
