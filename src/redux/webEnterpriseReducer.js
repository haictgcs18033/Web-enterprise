/** @format */

const stateDefault = {
  user: {
    values: {
      email: '',
      password: '',
    },
  },
  createUser:{
    values:{
      name:'',
      email:'',
      role:'',
      faculty:''
    }
  },
  users: {},
  load: false,
};
export const webEnterpriseReducer = (state = stateDefault, action) => {
<<<<<<< HEAD
    switch (action.type) {
        case 'INPUT': {
            return { ...state, user: action.user }
        }
        default: {
            return { ...state }
        }
    }

}
=======
  switch (action.type) {
    case 'INPUT': {
      return { ...state, user: action.user };
    }
    case 'GET_USERS_REQUEST':
      return { ...state, load: true };
    case 'GET_USERS': {
      return { ...state, users: action.payload, load: false };
    }
    default: {
      return { ...state };
    }
  }
};
>>>>>>> 75579a7af11009077629d67c87826efe95af69a2
