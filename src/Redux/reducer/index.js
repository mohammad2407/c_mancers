import { combineReducers } from "redux";

import { msgReducer } from "./msgReducer";

export const reducer = combineReducers({
    allPosts : msgReducer,
})