/** @format */
import { useEffect, useRef } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import styles from './Userlist.module.css';

import User from '../../../assets/img/user-avt.png';
import clsx from 'clsx';

export default function UserList({ receiver, users, chooseReceiver }) {
  const wrapperRef = useRef();

  useEffect(() => {
    const ps = new PerfectScrollbar(wrapperRef.current);
    ps.update();
  }, []);

  const renderUserList = () => {
    if (users) {
      return users.map((user) => {
        return (
          <div
            onClick={() => chooseReceiver(user)}
            key={user.id}
            className={clsx(styles.user, receiver === user.id && styles.focus)}>
            <img className={styles.avatar} src={User} alt='User' />
            <div className={styles.content}>
              <div className={styles.name}>{user.fullName}</div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div ref={wrapperRef} className={styles.container}>
      {renderUserList()}
    </div>
  );
}
