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
            facultyId: 0,
        },
    },
    userNameDelete: {
        name: ''
    },
    userType: {
        admin: 'ADMIN',
        marketingCordinator: 'MARKETING_CORDINATOR',
        marketingManager: 'MARKETING_MANAGER',
        student: 'STUDENT',
    },
    facultyType: {
        facultyId: 0,
        facultyId1: 1,
        facultyId2: 2,
    },
    totalItems: 0,
    users: [],
    load: false,
};
export const webEnterpriseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'INPUT': {
            return { ...state, user: action.user, createUser: action.createUser };
        }
        case 'GET_USERS_REQUEST':
            return { ...state, load: true };
        case 'GET_USERS': {
            return {
                ...state,
                users: action.payload.results,
                totalItems: action.payload.total,
                load: false,
            };
        }
        case 'CREATE_USER': {
            if (state.users.length <= 6) {
                state.users = [...state.users, action.payload];
                state.totalItems++;
            } else {
                state.totalItems++;
            }
            return {
                ...state,
            };
        }
        case 'DELETE_USER': {
            let userDelete = [...state.users]
            userDelete = userDelete.filter(user => user.id !== action.id);
            state.users = userDelete;
            return { ...state }
        }
        default: {
            return { ...state };
        }
    };
};
