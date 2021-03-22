export const ActionAuthType = {
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_AUTH_INFO: `user/loadAuthInfo`,
  LOG_OUT: `user/requiredAuthorization`,
};

export const requireAuthorization = (status) => ({
  type: ActionAuthType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadAuthInfo = (data) => ({
  type: ActionAuthType.LOAD_AUTH_INFO,
  payload: data,
});

export const logOut = (status) => ({
  type: ActionAuthType.LOG_OUT,
  payload: status,
});
