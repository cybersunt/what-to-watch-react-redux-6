import React from "react";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getGenresItems} from "../../../utils/utils";
import {changeGenre, resetFilter} from "../../../store/movies-filter/movies-filter-action";
import {MAX_DISPLAY_COUNT_GENRES} from "../../../constants/constants";

const GenresList = () => {
  const {movies} = useSelector((state) => state.DATA);
  const {currentFilterGenre} = useSelector((state) => state.FILTERS);
  const dispatch = useDispatch();

  const genresItems = getGenresItems(movies);
  const genresList = genresItems.length > MAX_DISPLAY_COUNT_GENRES ? genresItems.slice(0, Math.min(genresItems.length, MAX_DISPLAY_COUNT_GENRES)) : genresItems;

  const handleChangeFilter = (evt) => {
    evt.preventDefault();
    dispatch(resetFilter());
    dispatch(changeGenre(evt));
  };

  return (
    <ul className="catalog__genres-list" onClick={handleChangeFilter}>
      {genresList.map((item, index) => {
        return (
          <li key={index} className={classnames(`catalog__genres-item`, {[`catalog__genres-item--active`]: currentFilterGenre === item})}>
            <a id={item} href="#" className="catalog__genres-link">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default GenresList;
