import { ActionTypes } from "../actions/action-types";
const initialState = {
    users: [],
    loading: false,
    setLoading: false,
    pageNumber: 0,
};

export const userReducers = (state = initialState, action) => {
    console.log('userReducers:',action.payload)
    switch (action.type) {
        case ActionTypes.GET_USERS:

            return {
                ...state,
                users: action.payload, loading: false
            }
        case ActionTypes.GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case ActionTypes.ADD_USER:
            return { ...state, user: action.payload }
        case ActionTypes.UPDATE_USER:
            return { ...state, id: action.payload }
        case ActionTypes.DELETE_USER:
            return { ...state }
        default:
            return state
    }
}
