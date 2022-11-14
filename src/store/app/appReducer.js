import { appTypes } from '../typesConstants';

const initialState = {
  initialized: false
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case appTypes.IS_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default: return state
  }
}