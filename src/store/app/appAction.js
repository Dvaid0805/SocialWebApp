import { getAuthUserData } from '../auth/authAction';
import { appTypes } from '../typesConstants';

const isInitialized = () => ({
  type: appTypes.IS_INITIALIZED
})

export const initialize = () => dispatch => {
  let dispatchPromise = dispatch(getAuthUserData());
  dispatchPromise.then(() => {
    dispatch(isInitialized());
  });
}