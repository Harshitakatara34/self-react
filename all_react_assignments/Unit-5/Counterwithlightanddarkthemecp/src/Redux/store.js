import {legacy_createStore} from "redux"
import { themeReducer  } from "./themeReducer"
import { counterReducer  } from "./counterReducer"
import { combineReducers } from "redux"

// const initialState={
//     counter:10,
//     theme:"light",
// }

const rootReducer=combineReducers({
   themeReducer,
   counterReducer
})

export const store=legacy_createStore(rootReducer)