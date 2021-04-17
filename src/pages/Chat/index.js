/** @format */

import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
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
  const socket = socketCLient(server, {
    transports: ['polling', 'websocket'],
    query: {
      token: `${token}`,
    },
  });

  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);

  const [receiver, setReceiver] = useState({
    id: 0,
    email: '',
    fullName: '',
    role: '',
  });

  const [senderName, setSenderName] = useState('');

  const [message, setMessage] = useState('');

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

  const getChathistory = useCallback(
    () => dispatch(action.fetchChatHistory()),
    [dispatch]
  );

  const getMessages = useCallback(
    () => dispatch(action.fetchMessages(receiver && receiver.id, 10)),
    [dispatch, receiver]
  );

  const chatHistory = useSelector(
    (state) => state.webEnterpriseReducer.chatHistory
  );

  const prevMessages = useSelector(
    (state) => state.webEnterpriseReducer.messages
  );

  useEffect(() => {
    dispatch({ type: 'RESET_MESSAGES' });
  }, [dispatch]);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  useEffect(() => {
    getChathistory();
  }, [getChathistory]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  useEffect(() => {
    const sortedMessages = prevMessages.sort((a, b) => a.id - b.id);
    setMessages(sortedMessages);
  }, [prevMessages]);

  useEffect(() => {
    socket.on('server_message', (data) => {
      if (data.senderId === receiver.id) {
        setMessages((prevData) => [...prevData, data]);
        setSenderName(data.senderName);
      }
    });
    return () => socket.disconnect();
    // eslint-disable-next-line
  }, [receiver]);

  const handleChooseReceiver = (newReceiver) => {
    setReceiver({ ...receiver, ...newReceiver });
    dispatch({ type: 'RESET_MESSAGES' });
  };

  const handleSendChat = () => {
    socket.emit('client_message', {
      message,
      receiverId: parseInt(receiver && receiver.id),
    });
    setMessage('');
  };

  const handleTyping = debounce((e) => {
    const { value } = e.target;
    setMessage(value);
    setSenderName('');
  }, 200);

  const addNewConversation = () => {
    const newData = {
      id: receiver.id,
      message,
      receiverName: receiver.fullName,
    };
    dispatch({
      type: 'ADD_NEW_CHAT_HISTORY',
      payload: newData,
    });
    setMessages((prevData) => [
      ...prevData,
      {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        message,
        senderId: receiver.id,
        senderName:
          senderName !== ''
            ? senderName
            : JSON.parse(localStorage.getItem('USER_LOGIN')).user.fullName,
      },
    ]);
  };

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
