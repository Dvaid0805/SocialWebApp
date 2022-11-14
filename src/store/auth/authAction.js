import { instance } from '../api/api';
import { authTypes } from '../typesConstants';
import { stopSubmit } from 'redux-form'

const setAuthUserData = (userId, email, login, isAuth=true) => ({
  type: authTypes.SET_USER_DATA,
  payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async dispatch => {
  await instance.get(`auth/me`)
    .then(res => {
      if( res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserData(id,email,login));
      }
    });
}

export const logIn = (email, password, rememderMe) => dispatch => {
  instance.post('auth/login',{ email, password, rememderMe})
    .then(res => {
      if(res.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some eror";
        dispatch(stopSubmit("login", { _error: message }));
      }
    })
}

export const logOut = () => async dispatch => {
    instance.delete('auth/login')
      .then(res => {
        if(res.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
    })
}