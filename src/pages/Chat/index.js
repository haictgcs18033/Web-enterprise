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
  const token = localStorage.getItem('ACCESS_TOKEN');

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);

  const [receiver, setReceiver] = useState();

  const [message, setMessage] = useState('');

  const socket = socketCLient(server, {
    transports: ['polling', 'websocket'],
    query: {
      token: `${token}`,
    },
  });

  const userInfo = JSON.parse(localStorage.getItem('USER_LOGIN')).user;

  const users = useSelector((state) => state.webEnterpriseReducer.users);

  const chatHistory = useSelector(
    (state) => state.webEnterpriseReducer.chatHistory
  );

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

  const getChathistory = useCallback(
    () => dispatch(action.fetchChatHistory()),
    [dispatch]
  );

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  useEffect(() => {
    getChathistory();
  }, [getChathistory]);

  useEffect(() => {
    socket.on('server_message', (data) => {
      setMessages((prevData) => [...prevData, data]);
    });
    return () => socket.disconnect();
    // eslint-disable-next-line
  }, []);

  const handleChooseReceiver = (receiver) => {
    setReceiver(receiver);
  };

  const handleSendChat = () => {
    socket.emit('client_message', {
      message,
      receiverId: parseInt(receiver && receiver.id),
    });
    setMessage('');
  };

  const handleTyping = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const addNewConversation = () => {
    const data = {
      id: receiver.id,
      message,
      receiverName: receiver.fullName,
    };
    dispatch({
      type: 'ADD_NEW_CHAT_HISTORY',
      payload: data,
    });
    setMessages((prevData) => [
      ...prevData,
      {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        message,
        senderId: receiver.id,
        senderName: JSON.parse(localStorage.getItem('USER_LOGIN')).user
          .fullName,
      },
    ]);
  };

  console.log(messages);

  return (
    <div className={styles.container}>
      <UserList
        receiver={receiver && receiver.id}
        chooseReceiver={handleChooseReceiver}
        users={users}
      />
      <div className={styles.mainChat}>
        <ChatHistory
          receiver={receiver && receiver.id}
          chooseReceiver={handleChooseReceiver}
          data={chatHistory}
        />
        <div className={styles.communicationArea}>
          <CommunicationList
            receiver={receiver && receiver}
            communications={messages}
          />
          <ChatArea
            receiver={receiver && receiver.id}
            addNewConversation={addNewConversation}
            sendMessage={handleSendChat}
            typing={handleTyping}
            message={message}
          />
        </div>
      </div>
    </div>
  );
}
