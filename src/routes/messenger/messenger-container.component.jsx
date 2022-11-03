import { useDispatch, useSelector } from 'react-redux';
import { WithAuthRedirect } from '../../hocs/withAuthRedirect';

import Messenger from './messenger.component';
import { updateInputTextActionCreator, addNewMessageActionCreator } from '../../store/message/messageAction';


const MessengerContainer = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const onChangeUpdateInputText = (text) => {
    dispatch(updateInputTextActionCreator(text));
  }
  const onClickAddNewMessage = () => {
    dispatch(addNewMessageActionCreator(state.dialogsPage.inputMessage));
  }
  return (
      <Messenger
        state={state.dialogsPage}
        onChangeUpdateInputText={onChangeUpdateInputText}
        onClickAddNewMessage={onClickAddNewMessage}
      />
  )
}

const MessengerWithRedirect = WithAuthRedirect(MessengerContainer);

export default MessengerWithRedirect;
