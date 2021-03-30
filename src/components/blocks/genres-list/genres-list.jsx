import React from "react";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {getGenresItems} from "../../../utils/utils";
import {changeGenre, resetFilter} from "../../../store/movies-filter/movies-filter-action";
import {MAX_DISPLAY_COUNT_GENRES} from "../../../constants/constants";
import PropTypes from "prop-types";

const GenreItem = ({item}) => {
  const dispatch = useDispatch();
  const {currentFilterGenre} = useSelector((state) => state.FILTERS);

  const handleChangeFilter = (evt) => {
    evt.preventDefault();
    dispatch(resetFilter());
    dispatch(changeGenre(item));
  };

  return (
    <li className={classnames(`catalog__genres-item`, {[`catalog__genres-item--active`]: currentFilterGenre === item})} onClick={handleChangeFilter}>
      <a href="#" className="catalog__genres-link">{item}</a>
    </li>
  );
};

GenreItem.propTypes = {item: PropTypes.string.isRequired};

const GenresList = () => {
  const {movies} = useSelector((state) => state.DATA);

  const genresItems = getGenresItems(movies);
  const genresList = genresItems.length > MAX_DISPLAY_COUNT_GENRES ? genresItems.slice(0, Math.min(genresItems.length, MAX_DISPLAY_COUNT_GENRES)) : genresItems;

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item) => <GenreItem key={item.toLowerCase()} item={item}/>)}
    </ul>
  );
};

export default GenresList;
