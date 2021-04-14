/** @format */
import { useHistory } from 'react-router';

import { Chat } from '../../assets/icons/index';

import styles from './chat.module.css';

export default function ChatIcon() {
  const history = useHistory();

  const userInfo = JSON.parse(localStorage.getItem('USER_LOGIN'));

  const switchRoleUrl = () => {
    switch (userInfo.user.role) {
      case 'STUDENT':
        return '/student/chat';
      case 'MARKETING_CORDINATOR':
        return '/coordinator/chat';
    }
  };

  return (
    <div
      onClick={() => history.push(switchRoleUrl())}
      className={styles.container}>
      <Chat />
    </div>
  );
}
