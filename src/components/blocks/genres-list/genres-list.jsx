import React from "react";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getGenresItems} from "../../../utils/utils";
import {changeGenre, resetFilter} from "../../../store/movies-filter/movies-filter-action";

const GenresList = () => {
  const movies = useSelector((state) => state.movies);
  const currentFilterGenre = useSelector((state) => state.currentFilterGenre);
  const dispatch = useDispatch();

  const genresItems = getGenresItems(movies);

  const handleChangeFilter = (evt) => {
    evt.preventDefault();
    dispatch(resetFilter());
    dispatch(changeGenre(evt));
  };

  return (
    <ul className="catalog__genres-list" onClick={handleChangeFilter}>
      {genresItems.map((item, index) => {
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
