import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInMiddleware } from 'store/modules/auth/authMiddleware';
import { useHistory } from 'react-router';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchUserInfo = () => {
      if (new RegExp(/auth_token/).test(document.cookie)) {
        dispatch(signInMiddleware());
      }
    };
    fetchUserInfo();
    history.push('/');
  }, [dispatch, history]);
  return <div></div>;
};

export default SignIn;
