import { useRef} from 'react';
import styles from './message-input.styles.module.css';
import { addStateItemActionCreator, updateInputTestActionCreator } from '../../store/state';


const MessageInput = (props) => {

  const textInputRef = useRef();

  const resetFormFields = () => {
    props.dispatch(updateInputTestActionCreator(""));
    textInputRef.current.value = props.state.newPostText;
  };
  const submitHandler = () => {
    props.dispatch(addStateItemActionCreator(props.objectName));
    resetFormFields();
  }

  const onChangeHandler = () => {
    let text = textInputRef.current.value;
    props.dispatch(updateInputTestActionCreator(text));
  }
  return (
    <div className={styles.message_input_container}>
      <textarea
        className={styles.message_input}
        ref={textInputRef}
        placeholder={props.placeholder}
        onKeyUp={e => e.key === 'Enter' ? submitHandler(): null }
        onChange={onChangeHandler}
      />
      <button onClick={submitHandler} className={styles.send_button}>-></button>
    </div>
  )
}

export default MessageInput
