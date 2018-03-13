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
    case 'AC_UPDATE_TOPIC':
      state = {
        ...state,
        topics: state.topics.map(
           (content, i) => (i === (action.payload.index)) ? { ...content, topic: action.payload.val }
                                   : content
       ),
      };
  };
    return state;
  };

export default addCourseReducer;
