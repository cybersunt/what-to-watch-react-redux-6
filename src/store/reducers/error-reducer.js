import {errorAction} from "../actions/error-action";
import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  isCatchError: false
};

export const errorReducer = createReducer(initialState, (builder) => {
  builder.addCase(errorAction, (state) => {
    state.isCatchError = true;
  });
});
