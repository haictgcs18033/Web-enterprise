import { combineReducers, createStore, applyMiddleware } from 'redux'
import { webEnterpriseReducer } from './webEnterpriseReducer'
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    webEnterpriseReducer
})
export const store = createStore(rootReducer, applyMiddleware(reduxThunk))