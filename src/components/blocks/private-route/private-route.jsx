import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from "../../../constants/auth";
import {RoutePath} from "../../../constants/routes";
import {connect} from "react-redux";

const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
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
  authorizationStatus: PropTypes.string,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
