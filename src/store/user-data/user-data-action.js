import {createAction} from "@reduxjs/toolkit";

export const ActionAuthType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_AUTH_INFO: `user/loadAuthInfo`,
  LOG_OUT: `user/requiredAuthorization`,
};

export const requireAuthorization = createAction(ActionAuthType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status
  };
});

export const loadAuthInfo = createAction(ActionAuthType.LOAD_AUTH_INFO, (data) => {
  return {
    payload: data
  };
});

export const logOut = createAction(ActionAuthType.LOG_OUT, (status) => {
  return {
    payload: status
  };
});
