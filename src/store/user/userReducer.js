import { userTypes } from '../typesConstants';


const initialState = {
  users: [],
  auth: {
    data: {},
    isAuth: false
  },
  error: "",
  loading: false,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  followingInProgress: null
}

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userTypes.FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.userId
      }
    case userTypes.AUTH_SET_DATA:
      return {
        ...state,
        loading: false,
        auth: { ...state.auth, data: action.data , isAuth: true  }
      }
    case userTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    case userTypes.USER_SUCCEED:
      return {
        ...state,
        users: [...payload.data],
        totalUsersCount: payload.totalCount,
        loading: false
      }
    case userTypes.ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case userTypes.LOADING:
      return {
        ...state,
        loading: true
      }
    case userTypes.UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId ) {
            return {...user, followed: false}
          }
          return user
        }),
        followingInProgress: null
      }
    case userTypes.FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId ) {
            return {...user, followed: true}
          }
          return user
        }),
        followingInProgress: null
      }
    default:
      return state;
  }
}