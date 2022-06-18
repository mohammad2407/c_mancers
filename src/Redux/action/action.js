export const LIVE_UPDATE = "LIVE_UPDATE"
export const ADD_GIFS   = "ADD_GIFS"
export const DELETE_GIF =  "DELETE_GIF"
export const POSTING_POST ="POSTING_POST"
export const RESET = "RESET"

export const addGifs =(gif) =>{
    return {
        type:ADD_GIFS,
        payload: gif
    }
}

export const deleteGif = (id) =>{
    return{
        type:DELETE_GIF,
        payload:id
    }
}

export const eventPost = (post) =>{
    return {
        type: POSTING_POST,
        payload:post
    }
}

export const reset = () =>{
    return {
        type:RESET
    }
}



