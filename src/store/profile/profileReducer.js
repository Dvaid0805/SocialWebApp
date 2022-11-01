import { profileTypes } from '../typesConstants';

const initialState = {
  currentUser: null,
  loading: false,
  error: ""
}

export const profileReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch(type) {
    case profileTypes.PROFILE_GET_USER:
      return {
        ...state,
        currentUser: action.userData,
        loading: false
      }
    case profileTypes.PROFILE_ERROR_USER:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case profileTypes.PROFILE_LOADING_USER:
      return {
        ...state,
        loading: true
      }
    default: return state
  }
}