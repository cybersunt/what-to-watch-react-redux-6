import {ActionErrorType} from "../actions/catch-error";

const initialState = {
  isCatchError: false
};

export const catchError = (state = initialState, action) => {
  switch (action.type) {
    case ActionErrorType.CATCH_ERROR:
      return {
        ...state,
        isCatchError: true
      };
  }

  return state;
};
