import ajax from 'apis/ajax';
import { cookie } from 'utils';
import {
  deleteAccountErrorAction,
  deleteAccountLoadingAction,
  deleteAccountSuccessAction,
  editAccountErrorAction,
  editAccountLoadingAction,
  editAccountSuccessAction,
  signInErrorAction,
  signInLoadingAction,
  signInSuccessAction,
  signOutErrorAction,
  signOutLoadingAction,
  signOutSuccessAction,
  signUpErrorAction,
  signUpLoadingAction,
  signUpSuccessAction,
} from './authActionCreator';

export const signUpMiddleware = () => async dispatch => {
  dispatch(signUpLoadingAction());

  try {
    const response = await ajax.signUp();
    const { currentUser: payload } = response.data;
    dispatch(signUpSuccessAction(payload));
  } catch (error) {
    dispatch(signUpErrorAction(error));
  }
};

export const signInMiddleware = auth_token => async dispatch => {
  dispatch(signInLoadingAction());

  try {
    const response = await ajax.signIn(auth_token);
    const { currentUser: payload } = response.data;
    dispatch(signInSuccessAction(payload));
  } catch (error) {
    dispatch(signInErrorAction(error));
  }
};

export const signOutMiddleware = () => dispatch => {
  dispatch(signOutLoadingAction());

  try {
    // const response = await ajax.signOut();
    // const { currentUser: payload } = response.data;
    dispatch(signOutSuccessAction());
    cookie.delete('auth_token');
  } catch (error) {
    dispatch(signOutErrorAction(error));
  }
};

export const editAccountMiddleware = (userId, editedInfo) => async dispatch => {
  dispatch(editAccountLoadingAction());

  try {
    const response = await ajax.editPortfolio(userId, editedInfo);
    const { currentUser: payload } = response.data;
    dispatch(editAccountSuccessAction(payload));
  } catch (error) {
    dispatch(editAccountErrorAction(error));
  }
};

export const deleteAccountMiddleware = playload => dispatch => {
  dispatch(deleteAccountLoadingAction());

  try {
    dispatch(deleteAccountSuccessAction());
  } catch (error) {
    dispatch(deleteAccountErrorAction(error));
  }
};
