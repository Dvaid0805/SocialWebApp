import Tabs from '../../components/tabs/tabs.component';
import Messages from '../../components/messages/messages.component';

import styles from './messenger.styles.module.css';

const Messenger = ({ state, onClickAddNewMessage }) => {
    return (
      <div className={styles.messenger_container}>
          <Tabs state={state} />
          <Messages
            state={state}
            onClickAddNewMessage={onClickAddNewMessage}
          />
      </div>
    )

}

export default Messenger
