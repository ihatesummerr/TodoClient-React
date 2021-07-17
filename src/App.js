import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from './components/Pages/Todo/Todo';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/todo' exact component={Todo} />
        </Switch>
    </BrowserRouter>
);

export default App;
