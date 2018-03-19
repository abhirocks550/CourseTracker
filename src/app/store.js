import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import addCourse from './reducers/addCourseReducer';
import existingCourses from './reducers/existingCourseReducer';
import trackCourse from './reducers/trackCourseReducer';
import promiseMiddleware from 'redux-promise-middleware';

const store = createStore(combineReducers({ addCourse, existingCourses, trackCourse }),
 {}, applyMiddleware(logger, thunk, promiseMiddleware()));
export default store;
