import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionsTypes'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })

    } catch (error) {
        console.error(error)   
    }   
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.error(error)
    }
}

export const updateLikeCount = (id) => async(dispatch) => {
    try {
        const { data } = await api.updateLikeCount(id)
        dispatch({ type: DELETE, payload: data })
    } catch (error) {
        console.error(error)
    }
}