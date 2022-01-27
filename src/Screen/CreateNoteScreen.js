import React,{useContext,useState} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput} from 'react-native'
import { NotesContext } from '../../Context/NotesContext';


const CreateNoteScreen = ({navigation}) => {
    const {state,dispatch} =useContext(NotesContext)
    const[title,setTitle]=useState("")
    const[content,setContent]=useState("")
  return (
    <View style={styles.views}>
        <Text style={styles.text}>Enter Title</Text>
        <TextInput
         style={styles.input}
        value={title}
    
        onChangeText={(text)=>setTitle(text)}/>
     
 
        
         <Text style={styles.text}>Enter content</Text>
         <TextInput style={styles.input}
        value={content}
        onChangeText={(text)=>setContent(text)}
        numberOfLines={3}
        multiline={true}
        />
        <TouchableOpacity 
        style={styles.opacity}
        onPress={()=>{
    dispatch({type:"ADD",payload:{title,content}})
    navigation.goBack()

}}>
        
        
            <Text style={styles.text}>save</Text>
            
        </TouchableOpacity>
    </View>

  )
};
const styles= StyleSheet.create({
    text:{
        fontSize:22,
    },

    views:{
        flex:1,
        margin:8
    },
    input:{
        fontSize:20,
        borderWidth:1,
        borderColor:"black",
        marginVertical:8,
         
    },
    opacity:{
        marginTop:30,
        backgroundColor:"blue",
        padding:12,
        color:"white",
        textAlign:'center',
        marginHorizontal:30,
        borderRadius:10
    }
   
    
})

export default CreateNoteScreen;
