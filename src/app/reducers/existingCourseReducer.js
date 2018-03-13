import * as initialStates from '../common/InitialStates';
import * as courseConst from '../common/Constants';

const existingCourse = (state = initialStates.existingCourse, action) =>  {
    switch (action.type) {
    case 'EC_UPDATE_INPUT':
      state = {
          ...state,
          [action.payload.name]: action.payload.value,
        };
    break;
    case 'EC_GET_COURSES':
      state = {
          ...state,
          coursesList: new Promise((resolve, reject) => {
            resolve(courseConst.courseList);
          }),
        };
    break;

  };
    return state;
  };

export default existingCourse;

