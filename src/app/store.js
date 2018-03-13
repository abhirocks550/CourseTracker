import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import addCourse from './reducers/addCourseReducer';
import existingCourses from './reducers/existingCourseReducer';

const store = createStore(combineReducers({ addCourse, existingCourses }), {}, applyMiddleware(logger, thunk));
export default store;
