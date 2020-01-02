import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';
import Users from './containers/Users';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> | 
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/pizza" component={asyncComponent(() => import('./containers/Pizza'))} />
                    <Route path="/" exact component={Users} />
                </div>
            </div>);
    }
}

export default App;