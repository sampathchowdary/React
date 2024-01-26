import { FETCHDATATOSTORE } from "../constants"

export const getApiDataToStore = (payload) => {
    return {
        type: FETCHDATATOSTORE,
        payload: payload
    }
}