import axios from 'axios';

export const updateInput = (event) => {
  return {
    type: 'EC_UPDATE_INPUT',
    payload: event.target,
  };
};

export const setValue = (details) => {
  return {
    type: 'EC_SET_VALUE',
    payload: details,
  };
};

export const getAllCourses = (details) => {
  return dispatch => {
    return dispatch({
      type: 'EC_GET_COURSE',
      payload: new Promise((resolve, reject) => {
        resolve(axios.get('http://localhost:3000/course/rest/getAllCourse'));
      }),
    });

  };

};
