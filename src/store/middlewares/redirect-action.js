import {createAction} from "@reduxjs/toolkit";

export const ActionRedirectType = {
  REDIRECT_TO_ROUTE: `redirect/redirectToRoute`,
};

export const redirectToRoute = createAction(ActionRedirectType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});
