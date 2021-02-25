/** @format */

import clsx from 'clsx';

import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as action from '../../../redux/action/ActionForRedux';

import { Edit, Delete } from '../../../assets/icons';

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

  console.log(users);
  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={clsx(styles.tableWrap, load && styles.load)}>
        <div className="d-flex justify-content-between">
          <h3 className={styles.userTitle}>Users</h3>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Create
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Create User</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>Full name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Role</label>
                        <select className="form-control">
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>

                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Faculty</label>
                        <select className="form-control">
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
    </div>
  );
}
