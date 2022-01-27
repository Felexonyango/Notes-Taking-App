import React from 'react';
import {StyleSheet,Text,View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator}from '@react-navigation/stack'
import ListNoteScreen from './src/Screen/ListNoteScreen';
import CreateNoteScreen from './src/Screen/CreateNoteScreen';
import ShowScreen from "./src/Screen/ShowScreen"
import EditScreen from './src/Screen/EditNoteScreen';

import {NotesProvider}from "./Context/NotesContext"
const Stack=createStackNavigator()


function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='notes'
        component={ListNoteScreen}
        options={{headerTitleAlign:'center',
      title:"All notes"
    }}
        />
             <Stack.Screen 
        name='Create'
        component={CreateNoteScreen}
        options={{headerTitleAlign:'center',
      title:"Create Note"
    }}
        />
                <Stack.Screen 
        name='show'
        component={ShowScreen}
        options={{headerTitleAlign:'center',
      title:" Note"
    }}
        />
               <Stack.Screen 
        name='edit'
        component={EditScreen}
        options={{headerTitleAlign:'center',
      title:"Update Note"
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
