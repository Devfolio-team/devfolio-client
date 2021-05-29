import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signInMiddleware } from 'store/modules/auth/authMiddleware';

const SignIn = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = document.cookie.split(';').find(cookie => cookie.includes('auth_token'));

    const authTokenValue = authToken ? authToken.split('=')[1] : null;

    if (authTokenValue) {
      dispatch(signInMiddleware());
    }
    history.push('/');
  }, [dispatch, history]);
  return null;
};

export default SignIn;
