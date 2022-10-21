import { FETCH , FETCH_BY_SEARCH, CREATE_POST , UPDATE_POST , DELETE_POST } from "./actionTypes";
import * as api from '../../api'

export const fetchAll = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAllPosts()
        dispatch({
            type:FETCH,
            payload:data
        })
        
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchPostBySearch = (searchTitle) => async (dispatch) => {
    try {
       const {data} = await api.fetchPostBySearch(searchTitle)
       dispatch({
            type:FETCH_BY_SEARCH,
            payload:data
       })
       
    } catch (error) {
        console.log(error)
    }

}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const {data} = await api.createPost(newPost)
        dispatch({
            type:CREATE_POST,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id,updated) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id,updated)
        dispatch({
            type:UPDATE_POST,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.deletePost(id)
        dispatch({
            type:DELETE_POST,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}