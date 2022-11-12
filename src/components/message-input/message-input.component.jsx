import styles from './message-input.styles.module.css';
import { useDispatch } from 'react-redux'


const MessageInput = ({state, placeholder, updateInputText, addNewItem}) => {
  const dispatch = useDispatch();

  const onChangeHandler = (text) => {
    dispatch(updateInputText(text));
  }
  const onClickHandler = () => {
    dispatch(addNewItem(state.inputText));
  }

  return (
    <div className={styles.message_input_container}>
      <textarea
        value={state.inputText}
        onChange={e => {onChangeHandler(e.target.value)}}
        className={styles.message_input}
        placeholder={placeholder}
        onKeyUp={e => e.key === 'Enter' ? onClickHandler(): null }
      />
      <button className={styles.send_button} onClick={onClickHandler} >-></button>
    </div>
  )
}

export default MessageInput
