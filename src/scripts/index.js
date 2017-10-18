import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../styles/index.css';
import Home from '../modules/home';
import BottomNav from '../components/bottomNav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route path='/' component={Home}/>
            <BottomNav/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
