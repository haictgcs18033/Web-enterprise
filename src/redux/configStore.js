import {combineReducers,createStore} from 'redux'
import {webEnterpriseReducer} from './webEnterpriseReducer'
const rootReducer=combineReducers({
    webEnterpriseReducer
})
export const store=createStore(rootReducer)