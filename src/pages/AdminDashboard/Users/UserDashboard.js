/** @format */

import clsx from 'clsx';

import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as action from '../../../redux/action/ActionForRedux';

import { Edit, Delete } from '../../../assets/icons';

import styles from './user.module.css';

import { switchRole } from './helper/role';

import SearchIcon from '../../../assets/img/search-icon.png';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

export default function UserDashboard(props) {
  const [userObj, setUserObj] = useState({});

  let schema = yup.object().shape({
    fullName: yup.string().required('Full name is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Enter a valid email'),
  });

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const [curPage, setCurPage] = useState(1);

  const limit = 6;

  const getUserList = useCallback(
    () => dispatch(action.fetchUsers(limit, curPage)),
    [dispatch, curPage]
  );

  const getFaculty = useCallback(() => dispatch(action.fetchFaculty(9999, 1)), [
    dispatch,
  ]);

  const editUser = (id, user) => dispatch(action.UpdateUser(id, user));

  const users = useSelector((state) => state.webEnterpriseReducer.users);

  const load = useSelector((state) => state.webEnterpriseReducer.load);

  const faculties = useSelector(
    (state) => state.webEnterpriseReducer.faculties
  );

  const totalItems = useSelector(
    (state) => state.webEnterpriseReducer.totalItems
  );

  const createUser = useSelector(
    (state) => state.webEnterpriseReducer.createUser
  );
  const userType = useSelector((state) => state.webEnterpriseReducer.userType);

  let { fullName, email } = createUser.values;

  let { admin, marketingCordinator, marketingManager, student } = userType;

  const [userDelete, setUserDelete] = useState({ id: 0, fullName: '' });
  useEffect(() => {
    getUserList();
  }, [getUserList, curPage]);
  useEffect(() => {
    getFaculty();
  }, [getFaculty]);
  const pageNumber = [];
  if (users) {
    for (let i = 1; i <= Math.ceil(totalItems / limit); i++) {
      pageNumber.push(i);
    }
  }

  let handleChangeInput = (e) => {
    let { name, value } = e.target;
    let newValues = { ...createUser.values };
    newValues[name] = value;
    if (name === 'facultyId') {
      newValues[name] = parseInt(value);
    }
    dispatch(action.handleInput(newValues));
    setUserObj({ ...userObj, [name]: value });
  };

  let deleteUser = (id) => {
    dispatch(action.DeleteUser(id));
  };

  let onSubmit = () => {
    let user = { ...createUser.values };
    dispatch(action.handleCreateUser(user));
    dispatch(action.handleSendMail(user.email));
  };

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
    if (users.length > 0) {
      return users.map((user) => {
        return (
          <tr key={user.id} className={styles.listItem}>
            <td className={styles.listColumn}>
              <p className={styles.username}>
                {user.id}-{user.fullName}-{user.email}
              </p>
            </td>
            <td className={styles.listColumn}>
              <p>{switchRole(user.role)}</p>
            </td>
            <td>
              <div className={styles.listColumn}>
                <div className={styles.edit}>
                  <button
                    type='button'
                    className={`btn ${styles.button}`}
                    data-toggle='modal'
                    data-target='#exampleModalUpdate'
                    onClick={() => setUserObj(user)}>
                    <Edit />
                  </button>
                </div>
                <div
                  className='modal fade'
                  id='exampleModalUpdate'
                  tabIndex={-1}
                  role='dialog'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'>
                  <div
                    className={`modal-dialog ${styles.dialogUpdate}`}
                    role='document'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5
                          className='modal-title'
                          id='exampleModalLabel update'>
                          Update User
                        </h5>
                      </div>
                      <div className='modal-body'>
                        <div className='row'>
                          <div className='col-6'>
                            <div className='form-group'>
                              <label>Full name</label>
                              <input
                                type='text'
                                className='form-control'
                                name='fullName'
                                value={userObj.fullName}
                                onChange={handleChangeInput}
                              />
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='form-group'>
                              <label>Password</label>
                              <input
                                type='text'
                                className='form-control'
                                name='fullName'
                                onChange={handleChangeInput}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='form-group'>
                              <label>Email</label>
                              <input
                                type='text'
                                className='form-control'
                                name='email'
                                value={userObj.email}
                                onChange={handleChangeInput}
                              />
                            </div>
                          </div>
                        </div>

                        {userObj.role === 'MARKETING_MANAGER' ||
                        userObj.role === 'ADMIN' ? null : (
                          <div className='row'>
                            <div className='col-6'>
                              <div className='form-group'>
                                <label>Faculty</label>
                                <select
                                  name='facultyId'
                                  value={userObj.facultyId}
                                  onChange={handleChangeInput}>
                                  {faculties.map((faculty, index) => {
                                    return (
                                      <option key={index} value={faculty.id}>
                                        {faculty.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className={`btn ${styles.modalDisable}`}>
                          Disable
                        </button>
                        <button
                          type='button'
                          className={`btn btn__cancel`}
                          data-dismiss='modal'>
                          Close
                        </button>
                        <button
                          onClick={() =>
                            editUser(userObj.id, {
                              fullName: userObj.fullName,
                              email: userObj.email,
                              password: userObj.password,
                              facultyId: parseInt(userObj.facultyId),
                              isBlocked: false,
                            })
                          }
                          type='button'
                          className={`btn btn__create`}
                          data-dismiss='modal'>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {user.role === 'ADMIN' ? (
                  ''
                ) : (
                  <div className={styles.del}>
                    <button
                      type='button'
                      className={`btn ${styles.button}`}
                      data-toggle='modal'
                      data-target='#exampleModalDelete'
                      onClick={() => {
                        setUserDelete({ id: user.id, fullName: user.fullName });
                      }}>
                      <Delete />
                    </button>
                  </div>
                )}
                <div
                  className='modal fade'
                  id='exampleModalDelete'
                  tabIndex={-1}
                  role='dialog'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'>
                  <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          Delete User
                        </h5>
                      </div>
                      <div className='modal-body'>
                        <p>
                          <span>
                            Do you want to delete{' '}
                            <span className='font-weight-bold'>
                              {userDelete.fullName}
                            </span>{' '}
                          </span>
                        </p>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className={`btn ${styles.modalDeleteClose}`}
                          data-dismiss='modal'>
                          Close
                        </button>
                        <button
                          type='button'
                          className={`btn ${styles.modalDelete}`}
                          data-dismiss='modal'
                          onClick={() => {
                            deleteUser(userDelete.id);
                          }}>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className={`container-fluid ${styles.wrapper}`}>
      <div className={clsx(styles.tableWrap, load && styles.load)}>
        <div className='d-flex justify-content-between'>
          <h3 className={styles.userTitle}>Users</h3>
          <button
            type='button'
            className={styles.createBtn}
            data-toggle='modal'
            data-target='#exampleModal'>
            Create
          </button>
          <form
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            role='dialog'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
            onSubmit={handleSubmit(onSubmit)}>
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create User
                  </h5>
                </div>
                <div className='modal-body'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label>Full name</label>
                        <input
                          type='text'
                          className='form-control'
                          name='fullName'
                          value={fullName}
                          onChange={handleChangeInput}
                          ref={register}
                        />
                        <p className='err-message'>
                          {errors.fullName?.message}
                        </p>
                      </div>
                      <div className='form-group'>
                        <label>Role</label>
                        <select name='role' onChange={handleChangeInput}>
                          <option value={admin}>Admin</option>
                          <option value={marketingCordinator}>
                            Marketing Coordinator
                          </option>
                          <option value={marketingManager}>
                            Marketing Manager
                          </option>
                          <option value={student}>Student</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='form-group'>
                        <label>Email</label>
                        <input
                          type='text'
                          className='form-control'
                          name='email'
                          value={email}
                          onChange={handleChangeInput}
                          ref={register}
                        />
                        <p className='err-message'>{errors.email?.message}</p>
                      </div>
                      <div className='form-group'>
                        <label>Faculty</label>
                        <select name='facultyId' onChange={handleChangeInput}>
                          {faculties.map((faculty, index) => {
                            // console.log(faculty);
                            return (
                              <option key={index} value={faculty.id}>
                                {faculty.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn__cancel'
                    data-dismiss='modal'>
                    Cancel
                  </button>
                  <button
                    data-dismiss='modal'
                    type='submit'
                    className='btn btn__create'>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className={'user-form'}>
          <div className='search-role'>
            <div className='row'>
              <div className='col-9'>
                <input type='text' name='' placeholder='Search tao di' />
                <img className='search-icon' src={SearchIcon} alt='123' />
              </div>
              <div className='col-3'>
                <select name='id' onChange={handleChangeInput}>
                  {faculties.map((faculty, index) => {
                    return (
                      <option key={index} value={faculty.id}>
                        {faculty.name}
                      </option>
                    );
                  })}
                </select>
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
    </div>
  );
}
