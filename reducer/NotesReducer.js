 export const intialState=[
 
 ]
 
 export const  reducer=(state,action)=>{

    switch(action.type){
        case "ADD":
            return [...state,{id:Math.random(),title:`blog title${state.length+1}`,content:"test"}]
            case "REMOVE":
                return  state.filter((note)=>action.payload !==note.id)

            default:
                return state
    }
    



}