import React from 'react';
import Todo from '../Todo/Todo';
import { List, Divider } from '@material-ui/core';

const TodoList = ({ todos }) => {
    return (
        <List>
            {todos.map((todo) => {
                return (
                    <>
                        <Todo todo={todo} key={todo._id} />
                        <Divider />
                    </>
                );
            })}
        </List>
    );
};

export default TodoList;
