export const ActionErrorType = {
  CATCH_ERROR: `errors/catchError`,
};

export const catchError = () => ({
  type: ActionErrorType.CATCH_ERROR
});
