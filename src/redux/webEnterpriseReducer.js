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
      facultyId: '',
    },
  },
  userUpdate: {
    values: {
      fullName: '',
      email: '',
      role: '',
      facultyId: '',
      password: '',
      facultyName: '',
      isBlocked: false,
    },
  },

<<<<<<< HEAD
    userNameDelete: {
        name: '',
    },
    userType: {
        admin: 'ADMIN',
        marketingCordinator: 'MARKETING_CORDINATOR',
        marketingManager: 'MARKETING_MANAGER',
        student: 'STUDENT',
    },
    faculties: [],
    facultySetting: {},
    totalItems: 0,
    users: [],
    load: false,
    contributions: [],
};
export const webEnterpriseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'INPUT': {
            return {
                ...state,
                user: action.user,
                createUser: action.createUser,
            };
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
        case 'GET_FACULTY': {
            state.createUser.values.facultyId = action.payload.results[0].id;
            return {
                ...state,
                faculties: action.payload.results,
                totalItems: action.payload.total,
                load: false
            };
        }
        case 'GET_FACULTY_ID': {
            return { ...state, facultySetting: action.faculty, load: false }
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
                load: false,
            };
        }
        case 'DELETE_USER': {
            let userDelete = [...state.users];
            userDelete = userDelete.filter((user) => user.id !== action.id);
            state.users = userDelete;
            return { ...state, load: false };
        }
        case 'UPDATE_USER': {
            const newPayload = state.users.map((user, index) => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        fullName: action.payload.fullName,
                        email: action.payload.email,
                        facultyId: action.payload.facultyId,
                    };
                }
                return user;
            });
            return {
                ...state,
                users: newPayload,
                load: false,
            };
        }

        default: {
            return { ...state };
=======
  userNameDelete: {
    name: '',
  },
  userType: {
    admin: 'ADMIN',
    marketingCordinator: 'MARKETING_CORDINATOR',
    marketingManager: 'MARKETING_MANAGER',
    student: 'STUDENT',
  },
  faculties: [],
  facultySetting: {},
  totalUsers: 0,
  totalFaculties: 0,
  users: [],
  load: false,
};
export const webEnterpriseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'INPUT': {
      return {
        ...state,
        user: action.user,
        createUser: action.createUser,
      };
    }
    case 'GET_USERS_REQUEST':
      return { ...state, load: true };
    case 'USER_ERROR':
      return { ...state, load: false };
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload.results,
        totalUsers: action.payload.total,
        load: false,
      };
    }
    case 'GET_FACULTY': {
      state.createUser.values.facultyId = action.payload.results[0].id;
      return {
        ...state,
        faculties: action.payload.results,
        totalFaculties: action.payload.total,
        load: false,
      };
    }
    case 'GET_FACULTY_ID': {
      return { ...state, facultySetting: action.faculty, load: false };
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
        load: false,
      };
    }
    case 'DELETE_USER': {
      let userDelete = [...state.users];
      userDelete = userDelete.filter((user) => user.id !== action.id);
      state.users = userDelete;
      return { ...state, load: false };
    }
    case 'UPDATE_USER': {
      const newPayload = state.users.map((user, index) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            fullName: action.payload.fullName,
            email: action.payload.email,
            facultyId: action.payload.facultyId,
          };
>>>>>>> bd8568c5f3ae9361347ae88b61891e3b9ba715eb
        }
        return user;
      });
      return {
        ...state,
        users: newPayload,
        load: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
