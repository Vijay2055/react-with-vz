import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo: "To do msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id,todo)=>{},
    toogleTodo: (id)=>{},
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider
