import React from 'react';
import MessageItem from '../message-item/message-item.component';

import styles from './messages.styles.module.css';

const Messages = ({state, onChangeUpdateInputText, onClickAddNewMessage}) => {
  const { messages_container, items_container, input_container } = styles;

  return (
    <div className={messages_container}>
      <div className={items_container}>
        {state.messages.map(i => <MessageItem key={i.id} message={i.message}/>)}
      </div>
      <div className={input_container}>
        <textarea
          value={state.inputMessage}
          onChange={e => {onChangeUpdateInputText(e.target.value)}}
          placeholder="message..."
        />
        <button onClick={onClickAddNewMessage} >-></button>
      </div>
    </div>
  )
}

export default Messages
