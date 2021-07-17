import React from 'react';
import Todo from '../Todo/Todo';
import { List, Divider } from '@material-ui/core';

const TodoList = ({ todos }) => {
    return (
        <List>
            {todos.map((todo) => {
                return (
                    <div key={todo._id}>
                        <Todo todo={todo} />
                        <Divider />
                    </div>
                );
            })}
        </List>
    );
};

export default TodoList;
