import { authTypes } from '../typesConstants';

const initialState = {
  data: {},
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_USER_DATA:
      return {
        ...state,
        data: {...action.payload},
      }
    default: return state
  }
}