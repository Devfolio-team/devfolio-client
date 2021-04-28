import {
  DELETE_ACCOUNT_ERROR,
  DELETE_ACCOUNT_LOADING,
  DELETE_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_ERROR,
  EDIT_ACCOUNT_LOADING,
  EDIT_ACCOUNT_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_IN_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_OUT_ERROR,
  SIGN_OUT_LOADING,
  SIGN_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
} from './authActionType';

export const signUpLoadingAction = () => ({ type: SIGN_UP_LOADING });
export const signUpSuccessAction = payload => ({ type: SIGN_UP_SUCCESS, payload });
export const signUpErrorAction = error => ({ type: SIGN_UP_ERROR, error });

export const signInLoadingAction = () => ({ type: SIGN_IN_LOADING });
export const signInSuccessAction = payload => ({ type: SIGN_IN_SUCCESS, payload });
export const signInErrorAction = error => ({ type: SIGN_IN_ERROR, error });

export const signOutLoadingAction = () => ({ type: SIGN_OUT_LOADING });
export const signOutSuccessAction = () => ({ type: SIGN_OUT_SUCCESS });
export const signOutErrorAction = () => ({ type: SIGN_OUT_ERROR });

export const editAccountLoadingAction = () => ({ type: EDIT_ACCOUNT_LOADING });
export const editAccountSuccessAction = payload => ({ type: EDIT_ACCOUNT_SUCCESS, payload });
export const editAccountErrorAction = () => ({ type: EDIT_ACCOUNT_ERROR });

export const deleteAccountLoadingAction = () => ({ type: DELETE_ACCOUNT_LOADING });
export const deleteAccountSuccessAction = () => ({ type: DELETE_ACCOUNT_SUCCESS });
export const deleteAccountErrorAction = () => ({ type: DELETE_ACCOUNT_ERROR });
