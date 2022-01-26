import React from 'react';
import {StyleSheet,Text,View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import ListNoteScreen from './src/Screen/ListNoteScreen';

import {NotesProvider}from "./Context/NotesContext"
const Stack=createStackNavigator()


function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='NOTES'
        component={ListNoteScreen}
        options={{headerTitleAlign:'center',
      title:"All notes"
    }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
};

export default ()=>{
  return(
    <NotesProvider>
      <App/>
    </NotesProvider>

    
  )
}
