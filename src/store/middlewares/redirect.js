import browserHistory from "../../browser-history";
import {ActionRedirectType} from "../actions/redirect";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionRedirectType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
