import { legacy_createStore } from "redux"
import { reducer as CounterReducer} from "./Counter/reducer"
import { reducer as todoReducer } from "./Todo/reducer"
import {combineReducers} from "redux"

const rootReducer=combineReducers({
    counter:CounterReducer,
    todo:todoReducer
})
export const store= legacy_createStore(rootReducer)