/** @format */
import Avatar from '../../../assets/img/user-avt.png';
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import styles from './communicate.module.css';

export default function CommunicationList({ communications, receiver }) {
  const wrapperRef = useRef();

  const name = JSON.parse(localStorage.getItem('USER_LOGIN')).user.fullName;

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, []);

  const renderCommunications = () => {
    if (communications) {
      // eslint-disable-next-line
      return communications.map((communication) => {
        if (receiver && receiver.id === communication.senderId) {
          return (
            <div key={communication.id} className={styles.communication}>
              <img className={styles.avatar} src={Avatar} alt='Avatar' />
              <div className={styles.content}>
                <div className={styles.author}>
                  {name === communication.senderName?"You":communication.senderName}
                </div>
                <div className={styles.message}>{communication.message}</div>
              </div>
            </div>
          );
        }
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{receiver && receiver.fullName}</div>
      <div ref={wrapperRef} className={styles.container}>
        {renderCommunications()}
      </div>
    </div>
  );
}
