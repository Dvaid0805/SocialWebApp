import { postTypes } from '../typesConstants';

export const updateInputTextActionCreator = (text) => {
  return {
    type: postTypes.UPDATE_INPUT_POST_TEXT,
    payload: {
      text: text,
    }
  }
}

export const addNewPostActionCreator = (text) => {
  const newPost = {
    id: 5,
    message: text,
    likes: 12
  }
  return   {
    type: postTypes.ADD_NEW_POST,
    payload: {
      newPost
    }
  }
}

