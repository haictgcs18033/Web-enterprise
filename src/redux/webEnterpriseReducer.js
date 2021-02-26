/** @format */

const stateDefault = {
    user: {
        values: {
            email: '',
            password: '',
        },
    },    
    createUser: {
        values: {
            fullName: '',
            email: '',
            role: 'ADMIN',
            facultyId:0
        }
    },
    userType:{
       admin:'ADMIN',
       marketingCordinator:'MARKETING_CORDINATOR',
       marketingManager:'MARKETING_MANAGER',
       student:'STUDENT'
    },
    facultyType:{
        facultyId:0,
        facultyId1:1,
        facultyId2:2
     },
    users: {},
    load: false,
};
export const webEnterpriseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'INPUT': {
            return { ...state, user: action.user ,createUser:action.createUser};
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
