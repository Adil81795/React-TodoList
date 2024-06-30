import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;
