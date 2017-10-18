/**
 * Created by gristar on 2017/10/18.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from '../modules/app';
import Home from '../modules/home';

const routes = () => {
    return (
        <Route component={App}>
            <IndexRoute component={Home}/>
        </Route>
    )
};

export default routes;