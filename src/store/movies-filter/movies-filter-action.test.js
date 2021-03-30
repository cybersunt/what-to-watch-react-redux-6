import {ActionFilterType, changeGenre, resetFilter, showMoreMovies} from "./movies-filter-action";

describe(`Action creators work for movies filters correctly`, ()=> {
  it(`Action creator for change the filter returns the correct action`, () => {
    const filterName = `Drama`;
    const expectedAction = {
      type: ActionFilterType.CHANGE_FILTER,
      payload: filterName,
    };
    expect(changeGenre(filterName)).toEqual(expectedAction);
  });
  it(`Action creator for incrementing step returns correct action`, () => {
    const expectedAction = {
      type: ActionFilterType.SHOW_MORE,
    };
    expect(showMoreMovies()).toEqual(expectedAction);
  });
  it(`Action creator for reset filter returns action with undefined payload`, () => {
    const expectedAction = {
      type: ActionFilterType.RESET_FILTER,
    };
    expect(resetFilter()).toEqual(expectedAction);
  });
});
