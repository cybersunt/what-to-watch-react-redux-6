import React from "react";
import {Route} from "react-router-dom";
import {MAX_ID_FILM} from "../../constants/common";
import NotFound from "../../components/pages/not-found/not-found";
import PropTypes from "prop-types";

const ValidateRoute = ({component: Component, path, exact}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={({match})=> {
        const {id} = match.params;
        const itemId = Number(id);
        return itemId <= MAX_ID_FILM ? <Component id={itemId}/> : <NotFound/>;
      }}
    />
  );
};

ValidateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool
};

export default ValidateRoute;
