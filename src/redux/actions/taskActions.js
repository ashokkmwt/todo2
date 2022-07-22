import { ADD_TODO, UPDATE_TODO,DELETE_TODO } from "./types";


const addTodo = (todo) => {
    // console.log("check value in action", todo);

    return {
        type: ADD_TODO,
        payload: todo
    }
}


const updateTodo = (todo) => {
    // console.log("check value in action", todo);

    return {
        type: UPDATE_TODO,
        payload: todo
    }
}


const deleteTodo = (todo) => {
    // console.log("check value in action", todo);

    return {
        type: DELETE_TODO,
        payload: todo
    }
}

export { addTodo, updateTodo, deleteTodo };