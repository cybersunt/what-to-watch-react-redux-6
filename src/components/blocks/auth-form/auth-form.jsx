import React, {useRef} from "react";
import {connect} from "react-redux";
import {login} from "../../../store/api-actions";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form";
import classnames from "classnames";

const AuthForm = ({isCatchError, onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();
  const {register, handleSubmit, errors} = useForm();

  const userMailRef = (evt) => {
    loginRef.current = evt;
    register(evt, {
      required: true,
      pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    });
  };

  const passWordRef = (evt) => {
    passwordRef.current = evt;
    register(evt, {required: true});
  };

  const onFormSubmit = () => {
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
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
        <button className="sign-in__btn" type="submit" onClick={handleSubmit(onFormSubmit)}>Sign in</button>
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  isCatchError: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isCatchError: state.isCatchError
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthForm};
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
