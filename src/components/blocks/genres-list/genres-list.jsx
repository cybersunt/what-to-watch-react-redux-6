import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../../store/movies-filter/movies-filter-action";
import {getGenresItems} from "../../../utils/utils";
import MoviesList from "../movies-list/movies-list";

const GenresList = ({movies, currentFilterGenre, resetFilter, changeGenre}) => {

  const genresItems = getGenresItems(movies);

  const onChangeFilter = (evt) => {
    evt.preventDefault();
    resetFilter();
    changeGenre(evt);
  };

  return (
    <ul className="catalog__genres-list" onClick={onChangeFilter}>
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

GenresList.propTypes = {
  ...MoviesList.propTypes,
  currentFilterGenre: PropTypes.string,
  genresItems: PropTypes.arrayOf(PropTypes.string),
  resetFilter: PropTypes.func,
  changeGenre: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentFilterGenre: state.currentFilterGenre,
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => {

  const {changeGenre, resetFilter} = bindActionCreators(actions, dispatch);

  return {changeGenre, resetFilter};
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
