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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
        sendMessage();
        addNewConversation();
      }}
      className={styles.container}>
      <input
        onChange={typing}
        // value={message}
        className={styles.input}
        placeholder='Type something...'
      />
      <button
        type='submit'
        className={styles.send}
        disabled={message.trim() === '' || !receiver}>
        <img src={Send} className={styles.img} alt='send' />
      </button>
    </form>
  );
}
