import React from 'react';
import MessageItem from '../message-item/message-item.component';

import AddMessageForm from '../add-message-form/add-message-form.component'

import styles from './messages.styles.module.css';


const Messages = ({state, onClickAddNewMessage}) => {

  const addNewMessage = (value) => {
    onClickAddNewMessage(value.newMessageBody)
  }
  const { messages_container, items_container, input_container } = styles;

  return (
    <div className={messages_container}>
      <div className={items_container}>
        {state.messages.map(i => <MessageItem key={i.id} message={i.message}/>)}
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Messages


