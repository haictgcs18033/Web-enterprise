import { combineReducers, createStore, applyMiddleware } from 'redux'
import { webEnterpriseReducer } from './webEnterpriseReducer'
import reduxThunk from 'redux-thunk'
import { contributionReducer } from './contributionReducer'
const rootReducer = combineReducers({
    webEnterpriseReducer,
    contributionReducer
})
export const store = createStore(rootReducer, applyMiddleware(reduxThunk))