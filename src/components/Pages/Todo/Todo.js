import React, { useState, useEffect } from 'react';
import { makeStyles, TextField, Paper } from '@material-ui/core';
import TodoList from '../../TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, createTodo } from '../../../actions/todos';

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
    todo: {
        padding: theme.spacing(3),
    },
    drawer: {
        width: 250,
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
            <Paper className={classes.todo} elevation={6}>
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
            </Paper>
        </div>
    );
};

export default Todo;
