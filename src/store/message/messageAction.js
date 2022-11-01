import { messageTypes } from '../typesConstants';

export const updateInputTextActionCreator = (text) => {
  return {
    type: messageTypes.UPDATE_INPUT_MESSAGE_TEXT,
    payload: {
      text: text,
    }
  }
}

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

