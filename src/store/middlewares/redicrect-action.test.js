import {ActionRedirectType, redirectToRoute} from "./redirect-action";

describe(`Action creators for redirect work correctly`, ()=> {
  it(`Action creator redirect returns correct action`, () => {
    const url = `/login`;
    const expectedAction = {
      type: ActionRedirectType.REDIRECT_TO_ROUTE,
      payload: `/login`
    };
    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
});
