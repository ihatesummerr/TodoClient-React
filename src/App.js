import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from './components/Pages/Todo';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/todo' exact component={Todo} />
        </Switch>
    </BrowserRouter>
);

export default App;
