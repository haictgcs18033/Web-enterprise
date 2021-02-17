import Axios from 'axios'
import swal from 'sweetalert';
export const handleInput = (newValues) => {
    return {
        type: 'INPUT',
        user: {
            values: newValues
        }
    }
}

export const loginAction = (user, props) => {
    return async dispatch => {
        try {
            let result = await Axios({
                url: 'https://greenplus-dev.herokuapp.com/auth/login',
                method: 'POST',
                data: user
            })
            localStorage.setItem('ACCESS_TOKEN', result.data.access_token)
            localStorage.setItem('USER_LOGIN', JSON.stringify(result.data))
            swal({
                title: "Dang nhap thành công",
                text: "Hãy bấm OK để tiếp tục hành động",
                icon: "success",
                button: "OK",
            });
            props.history.push('/admin/dashboard')
        } catch (err) {
            console.log(err.response?.data);
        }
    }
}
