import React from "react";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../../constants/auth";
import Tooltip from "../tooltip/tooltip";
import {RoutePath} from "../../../constants/routes";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {logout} from "../../../store/api-actions";

const SignIn = () => {
  const history = useHistory();
  const onSignIn = (evt)=> {
    evt.preventDefault();
    history.push(RoutePath.LOGIN);
  };

  return (
    <a href="#" className="login-link" onClick={onSignIn}>Sign in</a>
  );
};

const UserBlock = ({isUserDataReceived, authorizationStatus, authInfo, onLogOut}) => {
  const history = useHistory();
  const {location} = history;
  const {pathname} = location;

  const style = pathname !== RoutePath.MY_LIST ? {cursor: `pointer`} : null;

  const userName = isUserDataReceived ? authInfo.name : null;
  const userPicture = isUserDataReceived ? authInfo.avatarUrl : `img/avatar.jpg`;

  return authorizationStatus === AuthorizationStatus.AUTH ?
    (<Tooltip onClick={onLogOut} title="Log out" style={{marginLeft: `auto`}}>
      <div className="user-block" style={style} onClick={()=> history.push(RoutePath.MY_LIST)}>
        <div className="user-block__avatar">
          <img src={userPicture} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
      {userName}
    </Tooltip>) : <SignIn/>;
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string,
  authInfo: PropTypes.object,
  onLogOut: PropTypes.func,
  isUserDataReceived: PropTypes.bool
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authInfo: state.authInfo,
  isUserDataReceived: state.isUserDataReceived
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut() {
    dispatch(logout({login: null, password: null}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
