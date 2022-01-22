import { createStore, combineReducers } from "redux";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer
});

export const store = createStore(rootReducer);
