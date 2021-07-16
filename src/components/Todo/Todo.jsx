import React, { useState, useEffect } from 'react';
import {
    ListItem,
    Typography,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    ListItemIcon,
} from '@material-ui/core';
import { ChevronRight, Done } from '@material-ui/icons/';
import DeleteIcon from '@material-ui/icons/Delete';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { lightGreen } from '@material-ui/core/colors/';

import { deleteTodo, updateTodo } from '../../actions/todos';

const Todo = ({ todo }) => {
    const [done, setDone] = useState(todo.done);
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteTodo(todo._id));
    };

    const handleClick = (e) => {
        e.preventDefault();

        setDone((prev) => !prev);
    };

    useEffect(() => {
        dispatch(updateTodo(todo._id, { ...todo, done: done }));
    }, [done]);

    return (
        <ListItem
            button
            onClick={handleClick}
            style={done ? { backgroundColor: lightGreen[500] } : null}
        >
            <ListItemIcon>{done ? <Done /> : <ChevronRight />}</ListItemIcon>
            <ListItemText
                primary={todo.title}
                secondary={format(
                    new Date(todo.createdAt),
                    "dd.MM.Y 'at' HH:mm"
                )}
            />
            <ListItemSecondaryAction>
                <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={handleDelete}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;
