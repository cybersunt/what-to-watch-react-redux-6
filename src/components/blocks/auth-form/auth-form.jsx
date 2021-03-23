import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import classnames from "classnames";
import {login} from "../../../store/user-data/user-data-api-action";

const EMAIL_VALID = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const AuthForm = () => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const {register, handleSubmit, errors} = useForm();

  const isCatchError = useSelector((state) => state.isCatchError);
  const dispatch = useDispatch();

  const authData = {
    login: loginRef.current.value,
    password: passwordRef.current.value,
  };

  const userMailRef = (evt) => {
    loginRef.current = evt;
    register(evt, {
      required: true,
      pattern: EMAIL_VALID
    });
  };

  const passWordRef = (evt) => {
    passwordRef.current = evt;
    register(evt, {required: true});
  };

  const onSubmit = () => {
    dispatch(login(authData));
  };

  return (
    <form action="#" className="sign-in__form">

      {(errors.userEmail || isCatchError) &&
      (<div className="sign-in__message">
        {errors.userEmail && (<p>Please enter a valid email address</p>)}
        {isCatchError && (<p>We can’t recognize this email <br/> and password combination. Please try again.</p>)}
      </div>)}

      <div className="sign-in__fields">
        <div className={classnames(`sign-in__fields`, {[`sign-in__field--error`]: errors.userEmail || isCatchError})}>
          <input ref={userMailRef}
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="userEmail"
            id="user-email"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className={classnames(`sign-in__fields`, {[`sign-in__field--error`]: errors.userPassword || isCatchError})}>
          <input ref={passWordRef}
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="userPassword"
            id="user-password"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>

      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" onClick={handleSubmit(onSubmit)}>Sign in</button>
      </div>
    </form>
  );
};

export default AuthForm;
