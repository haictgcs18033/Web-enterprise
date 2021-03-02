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
  };
};

export const loginAction = (user, props) => {
  return async (dispatch) => {
    try {
      let result = await Axios({
        url: 'https://greenplus-dev.herokuapp.com/auth/login',
        method: 'POST',
        data: user,
      });
      localStorage.setItem('ACCESS_TOKEN', result.data.access_token);
      localStorage.setItem('USER_LOGIN', JSON.stringify(result.data));
      swal({
        title: 'Dang nhap thành công',
        text: 'Hãy bấm OK để tiếp tục hành động',
        icon: 'success',
        button: 'OK',
      });
      props.history.push('/admin/dashboard/users');
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
        `https://greenplus-dev.herokuapp.com/users?offset=${
          (page - 1) * limit
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
export const DeleteUser=(id)=>{

    return async dispatch=>{
        try{
           let result = await Axios({
               url:`https://greenplus-dev.herokuapp.com/users/${id}`,
               method:'DELETE',
               headers:{'Authorization':'Bearer '+localStorage.getItem('ACCESS_TOKEN')}
           })
          console.log(result.data);
           dispatch({type:'DELETE_USER',id:id});
           dispatch({
            type: 'GET_USERS_REQUEST',
          });
           swal({
            title: 'Thanh cong',
            text: 'thành công là con thất bại',
            icon: 'success',
            button: 'OK',
          });
        }catch(err){
            console.log(err.response?.data);
        }
    }
}