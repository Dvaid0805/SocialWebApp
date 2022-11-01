import React from 'react'

import styles from './post-item.styles.module.css';

const PostItem = (props) => {
  const { message, likes } = props;
  return (
    <div className={styles.post_item} >
      <div className="post_message_container">{message}</div>
      <div className="post_likes_container">{likes}</div>
    </div>
  )
}

export default PostItem
