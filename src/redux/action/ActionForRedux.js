/** @format */

import Axios from 'axios';
import swal from 'sweetalert';
export const handleInput = (newValues) => {
  return {
    type: 'INPUT',
    // User
    user: {
      values: newValues,
    },
    createUser: {
      values: newValues,
    },
    userUpdate: {
      values: newValues,
    },
    // Faculty
    createFaculty: {
      values: newValues,
    },
  };
};

export const fetchChatHistory = () => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: 'https://35.224.120.132/chat/conversations',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'CHAT_HISTORY',
        payload: result.data,
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};

export const loginAction = (admin, props) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: 'https://35.224.120.132/auth/login',
        method: 'POST',
        data: admin,
      });

      localStorage.setItem('ACCESS_TOKEN', result.data.access_token);
      localStorage.setItem('USER_LOGIN', JSON.stringify(result.data));
      swal({
        title: 'Login successfully',
        text: 'Please click OK to continue',
        icon: 'success',
        button: 'OK',
      });
      props.history.push('/admin/dashboard/users');
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};

export const fetchMessages = (receiverId = 1, limit) => {
  return async (dispatch) => {
    try {
      const result = await Axios({
        url: `https://35.224.120.132/chat/${receiverId}/messages?limit=${limit}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'GET_MESSAGES',
        payload: result.data,
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginHomePageAction = (student, props) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: 'https://35.224.120.132/auth/login',
        method: 'POST',
        data: student,
      });
      if (result.data.user.role === 'ADMIN') {
        swal({
          title: 'Oops!',
          text: '  Oops , may be here is not your dashboard',
          icon: 'warning',
        });
        return props.history.push('/admin');
      }
      localStorage.setItem('ACCESS_TOKEN', result.data.access_token);
      localStorage.setItem('USER_LOGIN', JSON.stringify(result.data));
      swal({
        title: 'Login successfully',
        text: 'Please click OK for continue',
        icon: 'success',
        button: 'OK',
      });
      props.history.push('/');
    } catch (err) {
      swal({
        title: 'Error',
        text: Array.isArray(err.response?.data.message)
          ? err.response.data.message[0]
          : err.response.data.message,
        icon: 'warning',
        button: 'OK',
      });
    }
  };
};

export const fetchUsers = (limit, page, keyword, role) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios.get(
        `https://35.224.120.132/users?offset=${
          (page - 1) * limit
        }&limit=${limit}${keyword !== '' ? `&query=${keyword}` : ''}${
          role !== '' ? `&role=${role}` : ''
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
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
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
        url: 'https://35.224.120.132/users',
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
      console.log(err);
      // dispatch({
      //   type: 'USER_ERROR',
      // });
      // swal({
      //   title: 'Error',
      //   text: Array.isArray(err.response.data.message)
      //     ? err.response.data.message[0]
      //     : err.response.data.message,
      //   icon: 'warning',
      //   button: 'OK',
      // });
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
        url: `https://35.224.120.132/users/${id}`,
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
      if (err.response.data.error === 'Not Found') {
        dispatch({ type: 'DELETE_USER', id: id });
      }
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
        url: `https://35.224.120.132/users/${id}`,
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

export const fetchFaculty = (limit, offset, keyword, type) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios({
        url: `https://35.224.120.132/faculty?offset=${
          (offset - 1) * limit
        }&limit=${limit}${keyword ? `&query=${keyword}` : ''}${
          type ? `&createAtOrderType=${type}` : ''
        }`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'GET_FACULTY',
        payload: result.data,
      });
      return result;
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
export const fetchFacultyById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios({
        url: `https://35.224.120.132/faculty/${id}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'GET_FACULTY_ID',
        faculty: result.data,
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
export const handleClosureDate = (closureDate) => {
  return async (dispatch) => {
    try {
      await Axios({
        url: 'https://35.224.120.132/global-config/closure-dates',
        method: 'POST',
        data: closureDate,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      swal({
        title: 'Success',
        text: 'Update successfully',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
export const fetchClosureDate = () => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios({
        url: 'https://35.224.120.132/global-config/closure-dates',
        method: 'GET',
      });
      dispatch({
        type: 'CLOSURE_DATE',
        closureDate: result.data,
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
export const createFacultyAdmin = (faculty) => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_USERS_REQUEST',
    });
    try {
      let result = await Axios({
        url: 'https://35.224.120.132/faculty',
        method: 'POST',
        data: faculty,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'CREATE_FACULTY',
        faculty: result.data,
      });
      swal({
        title: 'Success',
        text: 'Create successfully',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
export const handleDeleteFaculty = (id, props) => {
  return async (dispatch) => {
    try {
      await Axios({
        url: `https://35.224.120.132/faculty/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'DELETE_FACULTY',
        facultyId: id,
      });
      swal({
        title: 'Success',
        text: 'Delete successfully',
        icon: 'success',
        button: 'OK',
      });
      props.history.push('/admin/dashboard/faculty');
    } catch (err) {
      console.log(err.response?.data);
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};

export const updateFaculty = (id, facultyUpdate) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: `https://35.224.120.132/faculty/${id}`,
        method: 'PUT',
        data: facultyUpdate,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      dispatch({
        type: 'GET_FACULTY_ID',
        faculty: result.data,
      });
      swal({
        title: 'Success',
        text: 'Update successfully',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      dispatch({
        type: 'FACULTY_ERROR',
      });
      swal({
        title: 'Error',
        text: Array.isArray(err.response.data.message)
          ? err.response.data.message[0]
          : err.response.data.message,
        icon: 'warning',
        button: 'OK',
      });
      //   console.log(err.response?.data);
    }
  };
};
export const handleSendMail = (email) => {
  return async (dispatch) => {
    try {
      await Axios({
        url: 'https://35.224.120.132/auth/send-reset-password-mail',
        method: 'POST',
        data: email,
      });
      swal({
        title: '',
        text: 'Please check your email',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: Array.isArray(err.response?.data.message)
          ? err.response.data.message[0]
          : err.response.data.message,
        icon: 'warning',
        button: 'OK',
      });
    }
  };
};
export const handleResetPassword = (userCredential) => {
  return async (dispatch) => {
    try {
      await Axios({
        url: 'https://35.224.120.132/auth/reset-password',
        method: 'POST',
        data: userCredential,
      });
      swal({
        title: '',
        text: 'Please login again',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
export const handleChangePassword = (newPassword, props) => {
  return async (dispatch) => {
    try {
      await Axios({
        url: 'https://35.224.120.132/auth/change-password',
        method: 'POST',
        data: newPassword,
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
        },
      });
      swal({
        title: '',
        text: 'Update password successfully',
        icon: 'success',
        button: 'OK',
      });
    } catch (err) {
      swal({
        title: 'Error',
        text: err.response.data.message,
        icon: 'error',
        button: 'OK',
      });
    }
  };
};
