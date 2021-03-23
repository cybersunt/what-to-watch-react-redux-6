import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthorizationStatus} from "../../../constants/auth";
import Tooltip from "../tooltip/tooltip";
import {RoutePath} from "../../../constants/routes";
import {useHistory} from "react-router-dom";
import {logout} from "../../../store/user-data/user-data-api-action";

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

const UserBlock = () => {
  const authorizationStatus = useSelector((state) => state.authorizationStatus);
  const isUserDataReceived = useSelector((state) => state.isUserDataReceived);
  const authInfo = useSelector((state) => state.authInfo);

  const dispatch = useDispatch();

  const history = useHistory();
  const {location} = history;
  const {pathname} = location;

  const style = pathname !== RoutePath.MY_LIST ? {cursor: `pointer`} : null;

  const userName = isUserDataReceived ? authInfo.name : null;
  const userPicture = isUserDataReceived ? authInfo.avatarUrl : `img/avatar.jpg`;

  const handleLogOut = () => {
    dispatch(logout({login: null, password: null}));
  };

  return authorizationStatus === AuthorizationStatus.AUTH ?
    (<Tooltip onClick={handleLogOut} title="Log out" style={{marginLeft: `auto`}}>
      <div className="user-block" style={style} onClick={()=> history.push(RoutePath.MY_LIST)}>
        <div className="user-block__avatar">
          <img src={userPicture} alt="User avatar" width="63" height="63"/>
        </div>
      </div>
      {userName}
    </Tooltip>) : <SignIn/>;
};

export default UserBlock;
