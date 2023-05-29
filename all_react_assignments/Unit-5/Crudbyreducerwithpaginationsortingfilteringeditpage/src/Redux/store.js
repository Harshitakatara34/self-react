import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { reducer as authReducer} from "./authReducer.js/reducer" 
import thunk from "redux-thunk"
import { reducer as ProductReducer} from "./ProductReducer/reducer"
const rootReducer=combineReducers({
    authReducer,
    ProductReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))