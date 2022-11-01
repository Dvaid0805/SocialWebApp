import React from 'react'
import Tabs from '../../components/tabs/tabs.component';
import Messages from '../../components/messages/messages.component';

import styles from './messenger.styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateInputTextActionCreator, addNewMessageActionCreator } from '../../store/message/messageAction';

const Messenger = () => {
  const state = useSelector(state => state.dialogsPage);
  const dispatch = useDispatch();

  const onChangeUpdateInputText = (text) => {
    dispatch(updateInputTextActionCreator(text));
  }
  const onClickAddNewMessage = () => {
    dispatch(addNewMessageActionCreator(state.inputMessage));
  }

  window.state = state;
  return (
    <div className={styles.messenger_container}>
      <Tabs state={state} />
      <Messages
        state={state}
        onChangeUpdateInputText={onChangeUpdateInputText}
        onClickAddNewMessage={onClickAddNewMessage}
      />
    </div>
  )
}

export default Messenger
