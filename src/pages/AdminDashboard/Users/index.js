/** @format */

import clsx from 'clsx';

import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as action from '../../../redux/action/ActionForRedux';

import { Edit, Delete } from '../../../Components/icons';

import styles from './user.module.css';

import { switchRole } from './helper/role';

export default function UserDashboard(props) {
  const dispatch = useDispatch();

  const [curPage, setCurPage] = useState(1);

  const getUserList = useCallback(() => dispatch(action.fetchUsers(curPage)), [
    dispatch,
    curPage,
  ]);

  const users = useSelector((state) => state.webEnterpriseReducer.users);

  const load = useSelector((state) => state.webEnterpriseReducer.load);

  useEffect(() => {
    getUserList();
  }, [getUserList, curPage]);

  const pageNumber = [];

  if (users) {
    for (let i = 1; i <= Math.ceil(users.total / 2); i++) {
      pageNumber.push(i);
    }
  }

  const renderPages = () => {
    return pageNumber.map((pageNumber, index) => {
      return (
        <p
          key={index}
          onClick={() => setCurPage(pageNumber)}
          className={clsx(
            styles.page,
            curPage === pageNumber && styles.current
          )}>
          {pageNumber}
        </p>
      );
    });
  };

  const renderUsers = () => {
    if (Object.keys(users).length > 0) {
      return users.results.map((user) => {
        return (
          <tr key={user.id} className={styles.listItem}>
            <td className={styles.listColumn}>
              <p>{user.fullname}</p>
              <p className={styles.username}>{user.email}</p>
            </td>
            <td className={styles.listColumn}>
              <p>{switchRole(user.role)}</p>
            </td>
            <td>
              <div className={styles.listColumn}>
                <div className={styles.edit}>
                  <Edit />
                </div>
                <div className={styles.del}>
                  <Delete />
                </div>
              </div>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className={clsx(styles.tableWrap, load && styles.load)}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.head}>
              <p>Name</p>
            </th>
            <th className={styles.head}>
              <p>Role</p>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.body}>{renderUsers()}</tbody>
      </table>
      <div className={styles.pages}>{renderPages()}</div>
    </div>
  );
}
