import { combineReducers } from 'redux'
import userReducer from './html_reducer'
import postReducer from './css_reducer'

export default combineReducers({
    userReducer,
    postReducer
})