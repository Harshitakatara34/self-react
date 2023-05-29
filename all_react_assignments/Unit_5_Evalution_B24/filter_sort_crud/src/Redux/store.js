import React from 'react'
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { reducer as authReducer } from './authReducer/reducer'
import { reducer as productReducer } from './productReducer/reducer'
import thunk from "redux-thunk"

const rootReducer=combineReducers({authReducer,productReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

