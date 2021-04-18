import ajax from 'apis/ajax';
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

export const signInMiddleware = () => async dispatch => {
  dispatch(signInLoadingAction());

  try {
    const response = await ajax.signIn();
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
  } catch (error) {
    dispatch(signOutErrorAction(error));
  }
};

export const editAccountMiddleware = payload => dispatch => {
  dispatch(editAccountLoadingAction());

  try {
    dispatch(editAccountSuccessAction());
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
