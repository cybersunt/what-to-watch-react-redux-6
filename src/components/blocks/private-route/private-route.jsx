import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from "../../../constants/auth";
import {RoutePath} from "../../../constants/routes";
import {useSelector} from "react-redux";

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
