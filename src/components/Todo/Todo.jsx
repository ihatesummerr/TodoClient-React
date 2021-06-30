import React from 'react';
import { ListItem, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Todo = ({ todo }) => {
    return (
        <ListItem>
            <ChevronRightIcon />
            <Typography variant="h6">
                { todo.title }
            </Typography>
            <Typography variant="h6">
                { todo.done }
            </Typography>
            <Typography variant="h6">
                { todo.createdAt }
            </Typography>
        </ListItem>
    );
}

export default Todo;