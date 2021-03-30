import {ActionErrorType, catchError} from "./error-action";

describe(`Action creators for catch errors work correctly`, ()=> {
  it(`Action creator catch error returns correct action`, () => {
    const expectedAction = {
      type: ActionErrorType.CATCH_ERROR,
    };
    expect(catchError()).toEqual(expectedAction);
  });
});
