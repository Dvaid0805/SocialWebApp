import { combineReducers } from 'redux';

import { messageReducer } from './message/messageReducer';
import { postReducer } from './posts/postReducer';
import { userReducer } from './user/userReducer';
import { profileReducer } from './profile/profileReducer';

export const rootReducer = combineReducers({
  dialogsPage: messageReducer,
  postPage: postReducer,
  userPage: userReducer,
  profilePage: profileReducer,
})