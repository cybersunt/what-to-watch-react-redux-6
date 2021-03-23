import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AuthorizationStatus, RoutePath} from "../../../constants/constants";

const PrivateRoute = ({render, path, exact}) => {

  const {authorizationStatus} = useSelector((state) => state.USER_DATA);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={RoutePath.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
