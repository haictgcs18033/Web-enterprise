/** @format */

import Axios from 'axios';
import swal from 'sweetalert';
export const handleInput = (newValues) => {
  return {
    type: 'INPUT',
    user: {
      values: newValues,
    },
    createUser: {
      values: newValues,
    },
    userUpdate: {
      values: newValues,
    },
  };
};

export const loginAction = (admin, props) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: 'https://greenplus-dev.herokuapp.com/auth/login',
        method: 'POST',
        data: admin,
      });
      // if (result.user.role === 'ADMIN') {
      localStorage.setItem('ACCESS_TOKEN', result.data.access_token);
      localStorage.setItem('USER_LOGIN', JSON.stringify(result.data));
      swal({
        title: 'Dang nhap thành công',
        text: 'Hãy bấm OK để tiếp tục hành động',
        icon: 'success',
        button: 'OK',
      });
      props.history.push('/admin/dashboard/users');
      // }
    } catch (err) {
      return err.response.data.message;
    }
  };
};
export const loginHomePageAction = (admin, props) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: 'https://greenplus-dev.herokuapp.com/auth/login',
        method: 'POST',
        data: admin,
      });
      // if (result.user.role === 'ADMIN') {
      localStorage.setItem('ACCESS_TOKEN', result.data.access_token);
      localStorage.setItem('USER_LOGIN', JSON.stringify(result.data));
      swal({
        title: 'Dang nhap thành công',
        text: 'Hãy bấm OK để tiếp tục hành động',
        icon: 'success',
        button: 'OK',
      });
      props.history.push('/');
      // }
    } catch (err) {
      return err.response.data.message;
    }
  };
};
export const fetchUsers = (limit, page, keyword, faculty) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios.get(
        `https://greenplus-dev.herokuapp.com/users?offset=${
          (page - 1) * limit
        }&limit=${limit}${keyword !== '' ? `&query=${keyword}` : ''}${
          faculty !== '' ? `&role=${faculty}` : ''
        }`,
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
          },
        }
      );
      dispatch({
        type: 'GET_USERS',
        payload: result.data,
      });
    } catch (err) {
      return err.response.data.message;
    }
  };
};
export const fetchFaculty = (limit, offset, query, sort) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://greenplus-dev.herokuapp.com/faculty?offset=${
          offset - 1
        }&limit=${limit}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'GET_FACULTY',
        payload: result.data,
      });
    } catch (err) {
      return err.response.data.message;
    }
  };
};
export const handleCreateUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios({
        url: 'https://greenplus-dev.herokuapp.com/users',
        method: 'POST',
        data: user,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'CREATE_USER',
        payload: result.data,
      });
      swal({
        title: 'Success',
        text: `${user.fullName} is created`,
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
      });
      swal({
        title: 'Error',
        text: Array.isArray(err.response.data.message)
          ? err.response.data.message[0]
          : err.response.data.message,
        icon: 'warning',
        button: 'OK',
      });
    }
  };
};
export const handleSendMail = (email) => {
  return async (dispatch) => {
    try {
      await Axios({
        url:
          'https://greenplus-dev.herokuapp.com/auth/send-reset-password-mail',
        method: 'POST',
        data: email,
      });
    } catch (err) {
      return err;
    }
  };
};
export const DeleteUser = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      await Axios({
        url: `https://greenplus-dev.herokuapp.com/users/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({ type: 'DELETE_USER', id: id });
      swal({
        title: 'Success',
        text: 'User removed',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
      });
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};

export const UpdateUser = (id, user) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios({
        url: `https://greenplus-dev.herokuapp.com/users/${id}`,
        method: 'PUT',
        data: user,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({ type: 'UPDATE_USER', payload: result.data });
      swal({
        title: 'Success',
        text: 'Update successfully',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      dispatch({
        type: 'USER_ERROR',
      });
      swal({
        title: 'Error',
        text: Array.isArray(err.response.data.message)
          ? err.response.data.message[0]
          : err.response.data.message,
        icon: 'warning',
        button: 'OK',
      });
    }
  };
};
