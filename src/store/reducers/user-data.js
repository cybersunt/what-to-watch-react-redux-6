import {AuthorizationStatus} from "../constants/auth";
import {ActionAuthType} from "../actions/user-data";

const initialState = {
  isUserDataReceived: false,
  authorizationStatus: AuthorizationStatus.AUTH,
  authInfo: {},
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionAuthType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionAuthType.LOAD_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
        isUserDataReceived: true
      };
    case ActionAuthType.LOG_OUT:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
  }

  return state;
};;
