import axios from 'axios'

const url = "https://my-memories-project-backend.herokuapp.com/posts"

export const fetchPosts = () => axios.get(url)
export const createPost = (post) => axios.post(url, post)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const updateLikeCount = (id) => axios.patch(`${url}/${id}/updateLikeCount`)