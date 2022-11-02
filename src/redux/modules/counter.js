const ADD_TO_DOS='ADD_TO_DOS'
const DELETE_TO_DOS='DELETE_TO_DOS'
const CANCLE_TO_DOS='CANCLE_TO_DOS'
const DONE_TO_DOS='DONE_TO_DOS'

export const addToDos=(payload)=>{
    return{
        type: ADD_TO_DOS,
        payload
    }
}

export const deleteToDos=(payload)=>{
    return{
        type: DELETE_TO_DOS,
        payload
    }
}

export const cancleToDos=(payload)=>{
    return{
        type: CANCLE_TO_DOS,
        payload
    }
}

export const doneToDos=(payload)=>{
    return{
        type: DONE_TO_DOS,
        payload
    }
}

const initialState=[{
    id: 1,
    isDone: false,
    isDelete: false,
    title: 'This is the first title!',
    context: 'This is the first context!'
}]

const counter=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_DOS:
            return[
                ...state,action.payload
            ]   
        case DELETE_TO_DOS:
            return state.map((item)=>{
                if (item.id!=action.payload){
                    return item
                }
                return({...item,isDelete:true})
            })
        case DONE_TO_DOS:
            return state.map((item)=>{
                if (item.id!=action.payload){
                    return item
                }
                return({...item,isDone:true})
            })
        case CANCLE_TO_DOS:
            return state.map((item)=>{
                if (item.id!=action.payload){
                    return item
                }
                return({...item,isDone:false})
            })
        default:
            return state
    }
}

export default counter