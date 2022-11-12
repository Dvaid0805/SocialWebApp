import { profileTypes } from '../typesConstants'
import { instance, profileApi } from '../api/api';

const setProfileStatus = response => (
  {
    type: profileTypes.PROFILE_SET_STATUS,
    profileStatus: response
  }
);

export const updateProfileStatus = status => dispatch => {
  instance.put(`profile/status/${status}`);
}

const setProfileData = response => (
  {
    type: profileTypes.PROFILE_SET_DATA,
    profileData: response.data
  }
);

export const fetchProfileData = userId => async dispatch => {
  try {
    dispatch({
      type: profileTypes.PROFILE_LOADING_USER
    });

    const profileData = await instance.get(`profile/${userId}`).then(res => (dispatch(setProfileData(res))));
    const statusData = await instance.get(`profile/status/${userId}`).then(res => (dispatch(setProfileStatus(res.data))));

    dispatch({
      type: profileTypes.PROFILE_LOADING_USER_STOP
    })

  } catch(error) {
    dispatch({
      type: profileTypes.PROFILE_ERROR_USER,
      error
    });
  }
}
