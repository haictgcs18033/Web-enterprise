/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketCLient from 'socket.io-client';

import UserList from './UserList';

import * as action from '../../redux/action/ActionForRedux';

import styles from './chat.module.css';
import CommunicationList from './CommunicationList';
import ChatArea from './ChatArea';
import ChatHistory from './ChatHistory';

const server = 'https://35.224.120.132';

export default function ChatApplication() {
  const studentToken = localStorage.getItem('ACCESS_TOKEN');

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);

  const [receiverId, setReceiverId] = useState(155);

  const [message, setMessage] = useState('');

  const socket = socketCLient(server, {
    transports: ['polling', 'websocket'],
    query: {
      token: `${studentToken}`,
    },
  });

  const userInfo = JSON.parse(localStorage.getItem('USER_LOGIN')).user;

  const users = useSelector((state) => state.webEnterpriseReducer.users);

  const getUserList = useCallback(
    () =>
      dispatch(
        action.fetchUsers(
          99,
          1,
          '',
          userInfo.role === 'MARKETING_CORDINATOR'
            ? 'STUDENT'
            : 'MARKETING_CORDINATOR'
        )
      ),
    [dispatch, userInfo.role]
  );

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  useEffect(() => {
    socket.on('server_message', (data) => {
      setMessages((prevData) => [...prevData, data]);
    });
    return () => socket.disconnect();
    // eslint-disable-next-line
  }, []);

  const handleChooseReceiver = (receiver) => {
    setReceiverId(receiver);
  };

  const handleSendChat = () => {
    socket.emit('client_message', {
      message,
      receiverId: parseInt(receiverId),
    });
    setMessage('');
  };

  const handleTyping = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <div className={styles.container}>
      <UserList
        receiver={receiverId}
        chooseReceiver={handleChooseReceiver}
        users={users}
      />
      <div className={styles.mainChat}>
        <ChatHistory />
        <div>
          <CommunicationList communications={messages} />
          <ChatArea
            sendMessage={handleSendChat}
            typing={handleTyping}
            message={message}
          />
        </div>
      </div>
    </div>
  );
}
