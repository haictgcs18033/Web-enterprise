/** @format */

const stateDefault = {
  // User Management
  users: [],
  messages: [],
  totalUsers: 0,
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
  userNameDelete: {
    name: '',
  },
  userType: {
    admin: 'ADMIN',
    marketingCordinator: 'MARKETING_CORDINATOR',
    marketingManager: 'MARKETING_MANAGER',
    student: 'STUDENT',
  },
  // Faculty Management
  closureDateAdmin: {
    firstClosureDate: '',
    secondClosureDate: '',
  },
  faculties: [],
  facultySetting: {},
  totalFaculties: 0,
  createFaculty: {
    values: {
      name: '',
    },
  },

  load: false,
};
export const webEnterpriseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // User
    case 'INPUT': {
      return {
        ...state,
        user: action.user,
        createUser: action.createUser,
        createFaculty: action.createFaculty,
      };
    }
    case 'GET_MESSAGES':
      return {
        ...state,
        messages: [...state.messages, ...action.payload.results],
      };
    case 'RESET_MESSAGES':
      return { ...state, messages: stateDefault.messages };
    case 'CHAT_HISTORY':
      return { ...state, chatHistory: action.payload };
    case 'ADD_NEW_CHAT_HISTORY':
      const conversationIndex = state.chatHistory.findIndex(
        (chat) => chat.receiver.id === action.payload.id
      );
      if (conversationIndex === -1) {
        state.chatHistory.unshift({
          lastMessage: { content: action.payload.message },
          receiver: {
            id: action.payload.id,
            fullName: action.payload.receiverName,
          },
        });
      }
      const newConversation = state.chatHistory.map((chat) => {
        if (chat.receiver.id === action.payload.id) {
          return {
            ...chat,
            lastMessage: { content: action.payload.message },
          };
        }
        return chat;
      });
      return { ...state, chatHistory: newConversation };
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
    // Faculty
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
    case 'CLOSURE_DATE': {
      return { ...state, closureDateAdmin: action.closureDate, load: false };
    }
    case 'CREATE_FACULTY': {
      if (state.faculties.length <= 6) {
        state.faculties = [...state.faculties, action.faculty];
        state.totalFaculties++;
      } else {
        state.totalFaculties++;
      }
      return {
        ...state,
        load: false,
      };
    }
    case 'DELETE_FACULTY': {
      let facultyDelete = [...state.faculties];
      facultyDelete = facultyDelete.filter(
        (faculty) => faculty.id !== action.facultyId
      );
      state.faculties = facultyDelete;
      return { ...state };
    }
    case 'GET_REPORT': {
      return { ...state, report: action.statistic };
    }
    default: {
      return { ...state };
    }
  }
};
