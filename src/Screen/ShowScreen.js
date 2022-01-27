import React,{useContext} from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import { NotesContext } from '../../Context/NotesContext';

import { Feather } from '@expo/vector-icons';

const ShowScreen = ({route,navigation}) => {
    const {state} =useContext(NotesContext)
    const {id}=route.params
  const note=  state.find((record)=>{
        return record.id===id
    })
  return (
<View style={styles.views}>
<View style={styles.data}>
    <TouchableOpacity style={styles.opacity}>
    <Feather
    name='edit'
    size={30} 
    color="white"
    onPress={()=>navigation.navigate("edit",{id})}
    />
    </TouchableOpacity>

    </View>
    <Text style={styles.mytext}>{note.title}</Text>
    <Text style={styles.mytext}>{note.content}</Text>
</View>


  )
};
const styles= StyleSheet.create({
    mytext:{
        fontSize:22,
        textAlign:"center",

    },
    opacity:{
      marginVertical:10,
       backgroundColor:'blue',
       width:60,
       height:60,
       borderRadius:30,
       alignItems:'center',
       justifyContent:'center' 
   },

    views:{
        flex:1,
        marginTop:10
    },
    data:{
      alignItems:"center"
  },
    
})




export default ShowScreen;
