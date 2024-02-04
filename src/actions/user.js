import * as ActionTypes from '../constants/action-types';

//Utils
import * as AuthUtils from '../utils/auth';
import * as UrlUtils from '../constants/url';


function toggleAuthInProgress() {
  return {
    type: ActionTypes.USER.TOGGLE_AUTH_IN_PROGRESS
  };
}

function setCurrentUser(user) {
  return {
    type: ActionTypes.USER.SET_CURRENT_USER,
    currentUser: user
  };
}

function unsetCurrentUser() {
  return {
    type: ActionTypes.USER.UNSET_CURRENT_USER
  };
}

export function authenticateUser(requestBody) {
  return (dispatch) => {
    dispatch(toggleAuthInProgress());
    // UserApis.authenticateUser(requestBody)
    //   .then((response) => {
        dispatch(setCurrentUser(requestBody));
        dispatch(toggleAuthInProgress());
        AuthUtils.saveAuthCookie(requestBody.accessToken);
      // })
      // .catch(() => {
      //   dispatch(toggleAuthInProgress());
      // });
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(unsetCurrentUser());
    AuthUtils.removeAuthCookie();
    window.location.href = UrlUtils.LOGIN;
  };
}


