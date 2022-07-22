import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/types";

const initialState = []
// if data type is an array, we use array. if data type is an Object, we use Object.

const taskReducer = (state = initialState, action) => {
    // Deep copy
    let newState = [...state];
 
    switch (action.type) {
        case ADD_TODO:
            // console.log("check value in ADD_TODO reducer",action.payload);
            // updateState.push(action.payload);  - by this method value will go in updateState and also in state and also in initialState.So here we will not use it.
            // we don't update state directly. so firstly we will create updateState and then we will update updateState.
            return [...state, action.payload]

        case DELETE_TODO:
            // console.log("check value in REMOVE_TODO reducer",action.payload);
            //  Deep copy
            newState =  newState.filter(todo => todo !== action.payload)
            return newState

        case UPDATE_TODO:
            // console.log("check value in UPDATE_TODO reducer",action.payload);

            // Deep Copy
            const index = newState.findIndex(todo => todo === action.payload.oldTodo);
            newState[index] = action.payload.newTodo
            return newState
        default:

            return state
    }

}

export default taskReducer;