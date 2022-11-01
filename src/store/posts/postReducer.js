import { postTypes } from '../typesConstants';

const initialState = {
  posts: [
    {id: 1, message: 'Its so hot today!!!', likes: 11},
    {id: 2, message: 'We invite you to our party', likes: 1},
    {id: 3, message: 'My mom bought me a new car, im so excited to see it', likes: 321},
    {id: 4, message: `I killed him... i don't know to do...`, likes: 12590},
  ],
  inputPost: []
}

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case postTypes.UPDATE_INPUT_POST_TEXT:
      return {
        ...state,
        inputPost: payload.text
      }
    case postTypes.ADD_NEW_POST:
      return {
        ...state,
        posts: [...state.posts, payload.newPost],
        inputPost: []
      }
    default: return state
  }

}