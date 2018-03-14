import * as initialStates from '../common/InitialStates';

const trackCourseReducer = (state = initialStates.trackCourse, action) =>  {
    switch (action.type) {
    case 'TC_UPDATE_INPUT':
      state = {
          ...state,
          [action.payload.name]: action.payload.value,
        };
    break;
  };
    return state;
  };

export default trackCourseReducer;

