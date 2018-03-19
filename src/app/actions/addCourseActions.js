import axios from 'axios';

export const updateInput = (event) => {
  return {
      type: 'AC_UPDATE_INPUT',
      payload: event.target,
    };
};

export const addTopic = () => {
  return {
          type: 'AC_ADD_TOPIC',
          payload: { topicName: '' },
        };
};

export const updateTopic = (details) => {
  return {
          type: 'AC_UPDATE_TOPIC',
          payload: details,
        };
};

export const saveCourse = (details) => {

  return dispatch => {
          dispatch({
            type: 'AC_SAVE_COURSE',
            payload: new Promise((resolve, reject) => {
              resolve(axios({
                method: 'POST',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                },
                url: 'http://localhost:3000/course/rest/addNewCourse',
                data: details,
              })
            );
            }),
          });
        };
}; 
