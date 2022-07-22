import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducers";


const store = configureStore(
    {
        reducer: {
            taskReducer: taskReducer
        }

    }
)

export default store; 