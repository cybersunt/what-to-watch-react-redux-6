import {createAction} from '@reduxjs/toolkit';

export const ActionErrorType = {
  CATCH_ERROR: `errors/catchError`,
};

export const catchError = () => createAction(ActionErrorType.CATCH_ERROR);
