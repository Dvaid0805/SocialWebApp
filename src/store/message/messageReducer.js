import { messageTypes } from '../typesConstants';

const initialState = {
  dialogs: [
    {id: 1, name: 'Davyd'},
    {id: 2, name: 'Elena'},
    {id: 3, name: 'Sergio'},
    {id: 4, name: 'Ivan'}
  ],
  messages: [
    {id: 1, message: 'hello there, im Garfild lets make friends together'},
    {id: 2, message: 'How are y today?'},
    {id: 3, message: 'At 12'},
    {id: 4, message: 'What is you fill name?'}
  ],
}

export const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case messageTypes.ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, payload.newMessage],
      }
    default: return state
  }

}