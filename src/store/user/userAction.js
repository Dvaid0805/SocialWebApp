import { userTypes } from '../typesConstants'
import { instance } from '../api/api';

export const fetchUserActionCreator = (currentPage, pageSize) => async dispatch => {
  try{
    dispatch({
      type: userTypes.LOADING
    })

    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    dispatch({
      type: userTypes.USER_SUCCEED,
      payload: {
        data: response.data.items,
        totalCount: 56
        // totalCount: response.data.totalCount
      }
    })

  } catch(error) {
    dispatch({
      type: userTypes.ERROR,
      error
    })
  }
}

export const followUser = userId => async dispatch => {
  try {
    dispatch({
      type: userTypes.FOLLOWING_IN_PROGRESS,
      userId
    });

    await instance.post(`follow/${userId}`,
      {}, {withCredentials: true, headers: {"API-KEY": "367e63e1-9fd9-42b4-9056-9af4c7346df6"}})
      .then(res => {
      if(res.data.resultCode === 0) {
        dispatch({
          type: userTypes.FOLLOW_USER,
          userId
        });
      }
    });
  } catch(error) {
    dispatch({
      type: userTypes.ERROR,
      error
    });
  }
};

export const unfollowUser = userId => async dispatch => {
  try {
    dispatch({
      type: userTypes.FOLLOWING_IN_PROGRESS,
      userId
    });

    await instance.delete(`follow/${userId}`,
      {withCredentials: true, headers: {"API-KEY": "367e63e1-9fd9-42b4-9056-9af4c7346df6"}})
      .then(res => {
      if(res.data.resultCode === 0) {
        dispatch({
          type: userTypes.UNFOLLOW_USER,
          userId
        });
      }
    })

  } catch(error) {
    dispatch({
      type: userTypes.ERROR,
      error
    });
  }
};

export const setCurrentPage = page => async dispatch => {
  dispatch({
    type: userTypes.SET_CURRENT_PAGE,
    page
  });
  dispatch(fetchUserActionCreator(page));
};
