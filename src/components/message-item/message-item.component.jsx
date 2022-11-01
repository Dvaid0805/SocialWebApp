import React from 'react';
import styles from './message-item.styles.module.css';


const MessageItem = (props) => {
  const {message} = props;
  return <div className={styles.message_item}>{message}</div>
}

export default MessageItem;
