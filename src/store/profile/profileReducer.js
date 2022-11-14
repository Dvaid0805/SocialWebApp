import { profileTypes } from '../typesConstants';

const initialState = {
  currentProfile: null,
  loading: false,
  error: '',
  profileStatus: ''
}

export const profileReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch(type) {
    case profileTypes.PROFILE_SET_DATA:
      return {
        ...state,
        currentProfile: action.profileData,
      }
    case profileTypes.PROFILE_SET_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus,

      }
    case profileTypes.PROFILE_ERROR_USER:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case profileTypes.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      }
    case profileTypes.PROFILE_LOADING_STOP:
      return {
        ...state,
        loading: false
      }
    default: return state
  }
}