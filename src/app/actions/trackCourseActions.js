export const updateInput = (event) => {
    return {
        type: 'TC_UPDATE_INPUT',
        payload: event.target,
      };
  };
