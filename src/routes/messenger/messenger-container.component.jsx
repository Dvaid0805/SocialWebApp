import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Login from '../../components/login/login.component';
import Messenger from './messenger.component';
import { updateInputTextActionCreator, addNewMessageActionCreator } from '../../store/message/messageAction';

const MessengerContainer = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeUpdateInputText = (text) => {
    dispatch(updateInputTextActionCreator(text));
  }
  const onClickAddNewMessage = () => {
    dispatch(addNewMessageActionCreator(state.dialogsPage.inputMessage));
  }

  useEffect(() => {
    if(!state.userPage.auth.isAuth) {
      navigate("/login");
    }
  }, []);

  return (
      <Messenger
        state={state.dialogsPage}
        onChangeUpdateInputText={onChangeUpdateInputText}
        onClickAddNewMessage={onClickAddNewMessage}
      />
  )
}

export default MessengerContainer
