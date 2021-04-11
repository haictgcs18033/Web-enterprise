/** @format */

import Send from '../../../assets/img/send.png';

import styles from './ChatArea.module.css';

export default function ChatArea({ typing, message, sendMessage }) {
  return (
    <div className={styles.container}>
      <input
        onChange={typing}
        value={message}
        className={styles.input}
        placeholder='Type something...'
      />
      <button
        onClick={sendMessage}
        className={styles.send}
        disabled={message.trim() === '' && true}>
        <img src={Send} className={styles.img} alt='send' />
      </button>
    </div>
  );
}
