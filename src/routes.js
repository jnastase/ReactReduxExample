import React from 'react';
import { Route, Router } from 'react-router';
import StartPage from './pages/startPage';

export default (
    <Router>
        <Route path="/" component={StartPage} />
    </Router>
);