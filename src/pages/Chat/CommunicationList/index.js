/** @format */
import Avatar from '../../../assets/img/user-avt.png';
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import styles from './communicate.module.css';

export default function CommunicationList({ communications }) {
  const wrapperRef = useRef();

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, []);

  const renderCommunications = () => {
    if (communications) {
      return communications.map((communication) => {
        return (
          <div key={communication.id} className={styles.communication}>
            <img className={styles.avatar} src={Avatar} alt='Avatar' />
            <div className={styles.content}>
              <div className={styles.author}>Coordinator</div>
              <div className={styles.message}>{communication.message}</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div ref={wrapperRef} className={styles.container}>
      {renderCommunications()}
    </div>
  );
}
