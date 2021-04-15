/** @format */
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import Avatar from '../../../assets/img/user-avt.png';

import styles from './Chathistory.module.css';
import clsx from 'clsx';

export default function ChatHistory({ data, receiver, chooseReceiver }) {
  const wrapperRef = useRef();

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, []);

  const renderChatHistory = () => {
    if (data) {
      return data.map((message) => {
        return (
          <div
            key={message.receiver.id}
            onClick={() => chooseReceiver(message.receiver)}
            className={clsx(
              styles.chatHistory,
              receiver === message.receiver.id && styles.focus
            )}>
            <img src={Avatar} className={styles.avatar} alt='avatar' />
            <div>
              <div className={styles.name}>{message.receiver.fullName}</div>
              <div className={styles.message}>
                You: {message.lastMessage.content}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className={styles.header}>Chat</div>
      <div ref={wrapperRef} className={styles.container}>
        {renderChatHistory()}
      </div>
    </div>
  );
}
