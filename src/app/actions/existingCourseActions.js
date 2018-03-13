export const updateInput = (event) => {
  return {
      type: 'EC_UPDATE_INPUT',
      payload: event.target,
    };
};

export const getCourses = (courseName) => {
  return {
      type: 'EC_GET_COURSES',
      payload: courseName,
    };
};
