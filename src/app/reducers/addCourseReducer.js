import * as initialStates from '../common/InitialStates';

const addCourseReducer = (state = initialStates.addCourse, action) => {
    switch (action.type) {
    case 'AC_UPDATE_INPUT':
      state = {
          ...state,
          [action.payload.name]: action.payload.value,
        };
    break;
    case 'AC_ADD_TOPIC':
      state = {
        ...state,
        topics: [...state.topics, action.payload],
      };
    break;
    case 'AC_SAVE_COURSE_FULFILLED':
      state = initialStates.addCourse;
    break;

    case 'AC_UPDATE_TOPIC':
      state = {
        ...state,
        topics: state.topics.map(
           (content, i) => (i === (action.payload.index)) ? { ...content, topicName: action.payload.val }
                                   : content
       ),
      };
    break;

  };
    return state;
  };

export default addCourseReducer;
