import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { messageReducer } from './message/messageReducer';
import { postReducer } from './posts/postReducer';
import { userReducer } from './user/userReducer';
import { profileReducer } from './profile/profileReducer';
import { authReducer } from './auth/authReducer';
import { appReducer } from './app/appReducer';

export const rootReducer = combineReducers({
  dialogsPage: messageReducer,
  postPage: postReducer,
  userPage: userReducer,
  profilePage: profileReducer,
  form: formReducer,
  auth: authReducer,
  app: appReducer
})