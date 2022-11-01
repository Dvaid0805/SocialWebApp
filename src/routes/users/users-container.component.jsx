import React, { useEffect, useMemo } from 'react'
import Users from './users.component';
import { fetchUserActionCreator, followUser, unfollowUser, setCurrentPage } from '../../store/user/userAction';
import { useDispatch, useSelector } from 'react-redux';
import LoadingProgress from '../../components/loading-progress/loading-progerss.component';

const UsersContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userPage);

  const onClickFollow = (userId) => {
    dispatch(followUser(userId))
  }

  const onClickUnfollow = (userId) => {
    dispatch(unfollowUser(userId))
  }

  const onClickPagination = page => {
    dispatch(setCurrentPage(page))
  }

  useEffect(() => {
    ( state.users.length === 0 ) &&
      dispatch(fetchUserActionCreator(state.currentPage, state.pageSize));
  }, [dispatch])

  let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <LoadingProgress state={ state } />
      <Users state={state} follow={onClickFollow} unfollow={onClickUnfollow} paginationClick={onClickPagination} pages={pages} />
    </>

    )
}

export default UsersContainer
