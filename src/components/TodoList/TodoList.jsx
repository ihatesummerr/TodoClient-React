import React from 'react';
import Todo from '../Todo/Todo';
import { List, ListItem } from '@material-ui/core';

const TodoList = ({ todos }) => {
    console.log(todos);
    return (
        <List container>
            {todos.map((todo) => {
                return (
                        <Todo todo={todo} key={todo.createdAt} />
                    )
                }
            )}
        </List>
    );
};

export default TodoList;