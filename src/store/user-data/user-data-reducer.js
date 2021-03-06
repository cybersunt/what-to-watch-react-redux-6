import {loadAuthInfo, logOut, requireAuthorization} from "./user-data-action";
import {createReducer} from "@reduxjs/toolkit";
import {AuthorizationStatus} from "../../constants/constants";

const initialState = {
  isUserDataReceived: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {}
};

export const userData = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadAuthInfo, (state, action) => {
    state.authInfo = action.payload;
    state.isUserDataReceived = true;
  });
  builder.addCase(logOut, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});
