import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline, IconButton, Button, makeStyles } from '@material-ui/core';
import { ListOutlined } from '@material-ui/icons';
import TodoList from './components/TodoList/TodoList';
import { fetchTodos } from './api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((todos) => {
      setTodos(todos);
    })
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" className={classes.menuButton}>
            <ListOutlined />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Todos!
          </Typography>
          <Button variant="contained" color="secondary">
            Create new
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <TodoList todos={todos}/>
      </Container>
    </div>
  );
}

export default App;
