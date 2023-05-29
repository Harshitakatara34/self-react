import React, { createContext, useReducer } from 'react'

export const AppContext = createContext()

const intialstate = {
    count: 0,
    todos: []
}

const appReducerFn = (state, { type, payload }) => {
    switch (type) {
        case "Inc": {
            return {
                ...state, count: state.count + (payload || 1),
            }
        }
        case "Dec": {
            return {
                ...state, count: state.count - (payload || 1),
            }
        }
        case "ADD": {
            return {
                ...state, todos:
                    [...state.todos, { id: Date.now(), value: payload, isCompletd: false },
                    ]
            }
        }
        case"TOGGLE": {
            return {
                ...state, todos:state.todos.map((todo)=>{
                    if(todo.id===payload){
                        todo.isCompletd=!todo.isCompletd
                    }
                    return todo
                })
        }
    }
        case "DELETE": {
            return {
                ...state, todos:state.todos.filter((todo)=>(todo.id!==payload)),
                    
            }
        }
        default: {
            return state;
        }
    }
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducerFn, intialstate)

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
