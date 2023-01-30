import { types } from "../types";


const initialState = {
    uui: null
}

const configReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.setUuid:
            return {
                ...state,
                uui: action.payload
            }
        default:
            return state;
    }
}

export default configReducer;