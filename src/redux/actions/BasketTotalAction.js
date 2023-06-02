import {UPDATE_TOTAL} from '../types/ActionTypes'

export const updateTotal = (total) => {
    return{
        type: UPDATE_TOTAL,
        payload: total,
    }
}