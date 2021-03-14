/** @format */

import Axios from 'axios';
import swal from 'sweetalert';
export const handleInput = (newValues) => {
    console.log(newValues);
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
            console.log(err.response?.data);
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
            console.log(err.response?.data);
        }
    };
};
export const fetchUsers = (limit, page) => {
    return async (dispatch) => {
        dispatch({
            type: 'GET_USERS_REQUEST',
        });
        try {
            let result = await Axios.get(
                `https://greenplus-dev.herokuapp.com/users?offset=${(page - 1) * limit
                }&limit=${limit}`,
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
            console.log(err.response?.data);
        }
    };
};
export const fetchFaculty = (limit, offset, query, sort) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://greenplus-dev.herokuapp.com/faculty?offset=${offset - 1
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
            console.log(err.response?.data);
        }
    };
};
export const handleCreateUser = (user) => {
    return async (dispatch) => {
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
                title: 'Thanh cong',
                text: 'thành công là con thất bại',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            swal({
                title: 'That bai',
                text: 'Thất bại là mẹ thành công',
                icon: 'warning',
                button: 'OK',
            });
        }
    };
};
export const handleSendMail = (email) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url:
                    'https://greenplus-dev.herokuapp.com/auth/send-reset-password-mail',
                method: 'POST',
                data: email,
            });
            console.log(result.data);
            console.log('Thanh cong');
        } catch (err) {
            console.log(err.response?.data);
        }
    };
};
export const DeleteUser = (id) => {
    return async (dispatch) => {
        dispatch({
            type: 'GET_USERS_REQUEST',
        });
        try {
            let result = await Axios({
                url: `https://greenplus-dev.herokuapp.com/users/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            console.log(result.data);
            dispatch({ type: 'DELETE_USER', id: id });
            swal({
                title: 'Thanh cong',
                text: 'thành công là con thất bại',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            console.log(err.response?.data);
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
                title: 'Thanh cong',
                text: 'thành công là con thất bại',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            console.log(err.response?.data);
        }
    };
};
