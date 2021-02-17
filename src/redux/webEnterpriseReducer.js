const stateDefault = {
    user: {
        values: {
            email: '',
            password: ''
        }

    }
}
export const webEnterpriseReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'INPUT': {
            return { ...state, user: action.user }
        }
        default: {
            return { ...state }
        }
    }

}