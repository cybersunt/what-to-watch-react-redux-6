import {ActionAuthType, loadAuthInfo, logOut, requireAuthorization} from "./user-data-action";
import {AuthorizationStatus} from "../../constants/constants";

describe(`Action creators for user data work correctly`, ()=> {
  it(`Action creator require authorization initial state returns correct action`, () => {
    const status = AuthorizationStatus.NO_AUTH;
    const expectedAction = {
      type: ActionAuthType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH
    };
    expect(requireAuthorization(status)).toEqual(expectedAction);
  });
  it(`Action creator require authorization returns correct action`, () => {
    const status = AuthorizationStatus.AUTH;
    const expectedAction = {
      type: ActionAuthType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };
    expect(requireAuthorization(status)).toEqual(expectedAction);
  });
  it(`Action creator login returns correct action`, () => {
    const authData = {
      id: 1,
      login: `test@mail.ru`,
      password: `123456`,
      avatarUrl: `img/1.png`
    };
    const expectedAction = {
      type: ActionAuthType.LOAD_AUTH_INFO,
      payload: {
        id: 1,
        login: `test@mail.ru`,
        password: `123456`,
        avatarUrl: `img/1.png`
      }
    };
    expect(loadAuthInfo(authData)).toEqual(expectedAction);
  });
  it(`Action creator logout returns correct action`, () => {
    const status = AuthorizationStatus.NO_AUTH;
    const expectedAction = {
      type: ActionAuthType.LOG_OUT,
      payload: AuthorizationStatus.NO_AUTH
    };
    expect(logOut(status)).toEqual(expectedAction);
  });
});
