import {AUTH} from './actionTypes'
import * as api from '../../api'

export const signUp = (userInfo) => async (dispatch) => {
    try {
        const {data} = await api.signUp(userInfo)
        dispatch({
            type:AUTH,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const signIn = (userInfo) => async (dispatch) => {
    try {
        const {data} = await api.signIn(userInfo)
        dispatch({
            type:AUTH,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}