import { messageTypes } from '../typesConstants';

export const addNewMessageActionCreator = (text) => {
  const newMessage = {
    id: 5,
    message: text
  }
  return   {
    type: messageTypes.ADD_NEW_MESSAGE,
    payload: {
      newMessage
    }
  }
}

