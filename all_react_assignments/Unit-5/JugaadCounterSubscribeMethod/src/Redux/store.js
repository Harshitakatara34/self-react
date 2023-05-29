
import { legacy_createStore } from "redux"
import { reducer } from "./reducer"

const initialState={
    counter:5,
}
export const store = legacy_createStore(reducer,initialState)