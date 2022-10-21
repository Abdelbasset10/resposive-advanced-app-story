import axios from "axios";

const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const fetchAllPosts = () => API.get('/posts');
export const fetchPostBySearch = (searchTitle) => API.get(`/posts/search?searchQuery=${searchTitle}`)
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updated) => API.patch(`/posts/${id}`, updated);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likeDislikePost = (idPost,idUser) => API.patch(`/posts/${idPost}/likeDislike`,{userId:idUser});



export const signUp = (userInfo) => API.post(`/auth/sign-up`, userInfo);
export const signIn = (userInfo) => API.post(`/auth/sign-in`, userInfo);
