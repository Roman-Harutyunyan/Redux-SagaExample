import { GET_SUCCESS } from "../actions/action"

const initialState = {
    temp: ""
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_SUCCESS: {
            return {
                ...state,
                temp: action.payload.data.main.temp
            }
        }
        default: {
            return state
        }
    }
}