export const ActionRedirectType = {
  REDIRECT_TO_ROUTE: `redirect/redirectToRoute`,
};

export const redirectToRoute = (url) => ({
  type: ActionRedirectType.REDIRECT_TO_ROUTE,
  payload: url,
});
