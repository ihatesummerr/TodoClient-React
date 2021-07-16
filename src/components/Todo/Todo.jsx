import React from 'react';
import {
    ListItem,
    Typography,
    ListItemText,
    IconButton,
    ListItemSecondaryAction,
    ListItemIcon,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteIcon from '@material-ui/icons/Delete';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { deleteTodo } from '../../actions/todos';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();

        dispatch(deleteTodo(todo._id));
    };

    return (
        <ListItem button>
            <ListItemIcon>
                <ChevronRightIcon />
            </ListItemIcon>
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
                    onClick={handleClick}
                >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Todo;
