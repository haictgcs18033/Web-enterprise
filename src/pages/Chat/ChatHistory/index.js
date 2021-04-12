/** @format */
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import Avatar from '../../../assets/img/user-avt.png';

import styles from './Chathistory.module.css';

export default function ChatHistory() {
  const wrapperRef = useRef();

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, []);

  return (
    <div ref={wrapperRef} className={styles.container}>
      <div className={styles.chatHistory}>
        <img src={Avatar} className={styles.avatar} alt='avatar' />
        <div>
          <div className={styles.name}>Coordinator</div>
          <div className={styles.message}>
            This is the topic of the trending contribution
          </div>
        </div>
      </div>
      <div className={styles.chatHistory}>
        <img src={Avatar} className={styles.avatar} alt='avatar' />
        <div>
          <div className={styles.name}>Coordinator</div>
          <div className={styles.message}>
            This is the topic of the trending contribution
          </div>
        </div>
      </div>
      <div className={styles.chatHistory}>
        <img src={Avatar} className={styles.avatar} alt='avatar' />
        <div>
          <div className={styles.name}>Coordinator</div>
          <div className={styles.message}>
            This is the topic of the trending contribution
          </div>
        </div>
      </div>
      <div className={styles.chatHistory}>
        <img src={Avatar} className={styles.avatar} alt='avatar' />
        <div>
          <div className={styles.name}>Coordinator</div>
          <div className={styles.message}>
            This is the topic of the trending contribution
          </div>
        </div>
      </div>
      <div className={styles.chatHistory}>
        <img src={Avatar} className={styles.avatar} alt='avatar' />
        <div>
          <div className={styles.name}>Coordinator</div>
          <div className={styles.message}>
            This is the topic of the trending contribution
          </div>
        </div>
      </div>
    </div>
  );
}
