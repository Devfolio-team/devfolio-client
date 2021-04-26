import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInMiddleware } from 'store/modules/auth/authMiddleware';
import { useHistory } from 'react-router';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const authToken = document.cookie.split(';').find(cookie => cookie.includes('auth_token'));

    const authTokenValue = authToken ? authToken.split('=')[1] : null;

    if (authTokenValue) {
      dispatch(signInMiddleware(authTokenValue));
    }
    history.push('/');
  }, [dispatch, history]);
  return <></>;
};

export default SignIn;
