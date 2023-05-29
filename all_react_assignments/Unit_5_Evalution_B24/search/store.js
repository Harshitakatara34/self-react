import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer } from "./Redux/AuthReducer/authReducer";
import { reducer as ProductReducer } from "./Redux/ProductReducer/reducer";

const rootReducer = combineReducers({
  AuthReducer,
 ProductReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
