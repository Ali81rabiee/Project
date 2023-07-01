import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { posts } from "./reducer";
import thunk from "redux-thunk";
const reducers = combineReducers({ posts });
const middleWare = [thunk];
const help = JSON.parse(localStorage.getItem("posts")) || [];
const initialState = { posts: { data: [...help], loading: false, error: "" } };
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare),
);
export default store;
