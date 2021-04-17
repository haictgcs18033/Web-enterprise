/** @format */
import Avatar from '../../../assets/img/user-avt.png';
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import styles from './communicate.module.css';
import clsx from 'clsx';

export default function CommunicationList({ communications, receiver }) {
  const wrapperRef = useRef();
  const bottom = useRef();

  const name = JSON.parse(localStorage.getItem('USER_LOGIN')).user.fullName;

  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [communications]);

  const renderCommunications = () => {
    if (communications) {
      // eslint-disable-next-line
      return communications.map((communication) => {
        // if (receiver && receiver.id === communication.senderId) {
        return (
          <div
            key={communication.id}
            className={clsx(
              styles.communication,
              name === communication.senderName && styles.right
            )}>
            <img className={styles.avatar} src={Avatar} alt='Avatar' />
            <div
              className={clsx(
                styles.content,
                name === communication.senderName && styles.right
              )}>
              <div
                className={clsx(
                  styles.author,
                  name === communication.senderName && styles.right
                )}>
                {name === communication.senderName
                  ? 'You'
                  : communication.senderName}
              </div>
              <div
                className={clsx(
                  styles.message,
                  name === communication.senderName && styles.right
                )}>
                {communication.message}
              </div>
            </div>
          </div>
        );
        // }
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{receiver && receiver.fullName}</div>
      <div ref={wrapperRef} className={styles.container}>
        {renderCommunications()}
        <div ref={bottom} />
      </div>
    </div>
  );
}
