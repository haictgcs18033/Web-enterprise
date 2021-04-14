/** @format */

import Send from '../../../assets/img/send.png';

import styles from './ChatArea.module.css';

export default function ChatArea({
  typing,
  message,
  sendMessage,
  addNewConversation,
  receiver,
}) {
  return (
    <div className={styles.container}>
      <input
        onChange={typing}
        value={message}
        className={styles.input}
        placeholder='Type something...'
      />
      <button
        onClick={() => {
          sendMessage();
          addNewConversation();
        }}
        className={styles.send}
        disabled={message.trim() === '' || receiver === undefined}>
        <img src={Send} className={styles.img} alt='send' />
      </button>
    </div>
  );
}
