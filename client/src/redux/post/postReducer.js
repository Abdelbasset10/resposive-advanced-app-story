import { FETCH, FETCH_BY_SEARCH, CREATE_POST, UPDATE_POST, DELETE_POST } from "./actionTypes";

const postReducer = (posts=[],action) => {
    switch(action.type){
        case FETCH : return action.payload
        case FETCH_BY_SEARCH:
            console.log(action.payload)
            return action.payload
        case CREATE_POST : return [...posts,action.payload]
        case UPDATE_POST :return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE_POST : return posts.filter((post)=>post._id!== action.payload._id)
        default : return posts
    }
}

export default postReducer