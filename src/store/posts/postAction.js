import { postTypes } from '../typesConstants';

export const addNewPostActionCreator = (text) => {
  const newPost = {
    id: 5,
    message: text,
    likes: 12
  }
  return   {
    type: postTypes.ADD_NEW_POST,
    newPost
  }
}

