import React from 'react'
import { Link } from 'react-router-dom'

import styles from './navigation.styles.module.css';

const Navigation = () => {
  const { nav, nav_item } = styles;
  return (
    <nav className={nav}>
      <Link className={nav_item} to="posts">Posts</Link>
      <Link className={nav_item} to="messenger">Messanger</Link>
      <Link className={nav_item} to="friends">Friends</Link>
      <Link className={nav_item} to="users">Users</Link>
    </nav>
  )
}

export default Navigation
