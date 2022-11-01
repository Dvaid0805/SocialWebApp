import { profileTypes } from '../typesConstants'
import axios from 'axios';

export const setUserProfile = userId => async dispatch => {
  try {
    dispatch({
      type: profileTypes.PROFILE_LOADING_USER
    });

    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    console.log(response);

    dispatch({
      type: profileTypes.PROFILE_GET_USER,
      userData: response.data
    })

  } catch(error) {
    dispatch({
      type: profileTypes.PROFILE_ERROR_USER,
      error
    });
  }
}