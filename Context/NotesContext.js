import React,{createContext,useReducer} from 'react';
import {StyleSheet,Text,View} from 'react-native'
import {intialState, reducer} from "../reducer/NotesReducer"

 export const NotesContext=createContext()




export const NotesProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,intialState)
     return(
<NotesContext.Provider value={{state,dispatch}}>
    {children}
</NotesContext.Provider>

    )
 }