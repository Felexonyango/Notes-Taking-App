import React,{useContext} from 'react';
import {StyleSheet,Text,View,FlatList,TouchableOpacity} from 'react-native'
import { NotesContext } from '../../Context/NotesContext';
import {AntDesign} from "@expo/vector-icons"
const ListNoteScreen = () => {
    const {state,dispatch} =useContext(NotesContext)

  return (

<View style={styles.views}>
    <View style={styles.data}>
    <TouchableOpacity style={styles.opacity}>
    <AntDesign 
    name='plus'
    size={30} 
    color="white"
    onPress={()=>dispatch({type:"ADD"})}/>
<FlatList
    />
    </TouchableOpacity>

    </View>


<FlatList
data={state}
keyExtractor={item=>item.title}

renderItem={({item})=>{
    return(
        <View style={styles.delete}>
    <Text style={styles.text}>{item.title}</Text>
 
    <AntDesign 
    name="delete"
    size={24}
    onPress={()=>dispatch({type:"REMOVE",payload:item.id})}
    />
        </View>

    )
}}

/>
      </View>

    )
};
const styles= StyleSheet.create({
    text:{
        fontSize:22,
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
        flex:1
    },
    data:{
        alignItems:"center"
    },
    delete:{
        justifyContent:"space-between",
        flexDirection:"row",
        marginHorizontal:10,
        padding:10,
        marginBottom:5,
        backgroundColor:"white",
        elevation:4
    }
    
})

export default ListNoteScreen;
