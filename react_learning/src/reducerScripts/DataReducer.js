import { STOREDATA } from "../components/constants"

const initialState = {
    posts : []
}
export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case STOREDATA :
            return {...state,
                posts : []
            }
        
        default:
            return {...state}
    }
}
