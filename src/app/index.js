import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import AddCourse from './container/AddCourse/AddCourse';
import ExistingCourses from './container/ExistingCourses/ExistingCourses';
import './index.css';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={AddCourse} />
                <Route path='existingCourses' component={ExistingCourses}/>
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
