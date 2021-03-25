import {catchError} from "./error-action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  isCatchError: false
};

export const errorReducer = createReducer(initialState, (builder) => {
  builder.addCase(catchError, (state) => {
    state.isCatchError = true;
  });
});
