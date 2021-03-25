import {loadAuthInfo, requireAuthorization} from "./user-data-action";
import {createReducer} from "@reduxjs/toolkit";
import {AuthorizationStatus} from "../../constants/constants";

const initialState = {
  isUserDataReceived: false,
  authorizationStatus: AuthorizationStatus.AUTH,
  authInfo: {},
};

export const userData = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadAuthInfo, (state, action) => {
    state.authInfo = action.payload;
    state.isUserDataReceived = true;
  });
});
