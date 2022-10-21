import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import postReducer from './post/postReducer'

const rootReducers = combineReducers({
    posts:postReducer,
    auth:authReducer
})

export default rootReducers