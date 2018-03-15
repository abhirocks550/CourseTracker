export const updateInput = (event, isCheckBox) => {
    let _type = '';
    {
      (isCheckBox) ? (
          _type = 'TC_UPDATE_INPUT_CHECKBOX'
      ) :
      (
          _type = 'TC_UPDATE_INPUT'
      );
    }

    return {
        type: _type,
        payload: event.target,
      };
  };
