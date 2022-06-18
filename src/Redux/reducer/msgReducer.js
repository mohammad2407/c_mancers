import { POSTING_POST, ADD_GIFS, DELETE_GIF, RESET } from "../action/action";

const initstate = {
    live:[],
    gifs :[],
    posts:[]
}

export const msgReducer = (state = initstate, {type, payload}) =>{
    switch (type){
        case ADD_GIFS:
            return{
                ...state,
                gifs : [payload]
            }
            case DELETE_GIF:
               
               return {
                    ...state,
                    gifs: []
               }

            case POSTING_POST:
                return {
                    ...state,
                    posts:[...state.posts,payload]
                }

            case RESET:
                return {
                    ...state,
                    gifs:[]
                }
            default:
                return state
    }
}