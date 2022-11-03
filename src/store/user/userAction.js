import { userTypes } from '../typesConstants'
import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {"API-KEY": "367e63e1-9fd9-42b4-9056-9af4c7346df6"},
  baseURL: "https://social-network.samuraijs.com/api/1.0/"

})

export const fetchUserActionCreator = (currentPage, pageSize) => async dispatch => {
  try{
    dispatch({
      type: userTypes.LOADING
    })

    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`,
      {withCredentials: true}
    );
    console.log(response)
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

export const setAuthData = () => async dispatch => {
  try {
    dispatch({
      type: userTypes.LOADING,
    });

    await instance.get(`auth/me`, { withCredentials: true })
      .then(res => {
      if( res.data.resultCode === 0) {
        dispatch({
          type: userTypes.AUTH_SET_DATA,
          data: res.data.data
        })
      } else {
        dispatch({
          type: userTypes.ERROR,
          error: "User hasn't account "
        });
        setTimeout(() => (alert("Please, create an account here: 'link' ")), 10)
      }
    })

  } catch(error) {
    dispatch({
      type: userTypes.ERROR,
      error
    });
  }
}