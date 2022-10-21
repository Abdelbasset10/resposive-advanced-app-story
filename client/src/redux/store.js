import { createStore , applyMiddleware , compose  } from "redux";
import thunk from 'redux-thunk'
import rootReducers from "./rootReducers";

const store = createStore(rootReducers,compose(applyMiddleware(thunk)))

export default store