export const updateInput = (event) => {
  return {
      type: 'AC_UPDATE_INPUT',
      payload: event.target,
    };
};

export const addTopic = () => {
  return {
          type: 'AC_ADD_TOPIC',
          payload: { topic: '' },
        };
};

export const updateTopic = (details) => {
  return {
          type: 'AC_UPDATE_TOPIC',
          payload: details,
        };
};

