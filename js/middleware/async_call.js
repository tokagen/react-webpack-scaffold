function callSuccess (type, response) {
  return {
    type: `${type}_SUCCESS`,
    response
  };
}

function callFailed (type, response) {
  return {
    type: `${type}_FAILED`,
    response
  };
}

function callCompleted (type, response) {
  return {
    type: `${type}_COMPLETED`,
    response
  }
}

function callUnauthorized (response) {
  return {
    type: 'UNAUTHORIZED',
    response
  }
}

export default function ({ dispatch, getState }) {
  return next => action => {
    if (!action.async) {
      return next(action);
    }
    return action.repository(getState().currentUser)(action.payload).then((xhr, response) => {
      dispatch(callSuccess(action.type, response));
      dispatch(callCompleted(action.type, response));
    }).catch((xhr, status, response) => {
      if (status == 401) {
        dispatch(callUnauthorized(response));
      }
      dispatch(callFailed(action.type, response));
      dispatch(callCompleted(action.type, response));
    });
  }
};
