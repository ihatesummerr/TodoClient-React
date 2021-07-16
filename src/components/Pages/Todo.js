import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    CssBaseline,
    IconButton,
    Button,
    makeStyles,
    TextField,
} from '@material-ui/core';
import { ListOutlined } from '@material-ui/icons';
import TodoList from '../TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, createTodo, deleteTodo } from '../../actions/todos';

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

const Todo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todo);
    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const handleCreateTodo = async (e) => {
        e.preventDefault();
        if (title === '') {
            return;
        }

        dispatch(createTodo({ title: title }));
        //setTodos([...todos, data]);
        setTitle('');
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        className={classes.menuButton}
                    >
                        <ListOutlined />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Todo List!
                    </Typography>
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleCreateTodo}
                    >
                        Create new
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth='sm' style={{ paddingTop: 20 }}>
                <form noValidate autoComplete='off'>
                    <TextField
                        value={title}
                        variant='outlined'
                        label='Title'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') handleCreateTodo(e);
                        }}
                        fullWidth
                    />
                </form>
                {todos?.length ? <TodoList todos={todos} /> : null}
            </Container>
        </div>
    );
};

export default Todo;
