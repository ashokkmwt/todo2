import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../../redux/actions/taskActions";
import styles from './index.module.css'

export default function Mytodo() {
    const [inputValue, setInputValue] = useState("");
    // const [todos, setTodos] = useState([]);
    // after doing set up of redux, we don't need of todos.
    // const [editedValue, setEditedValue] = useState("");

    const changeValue = (e) => {
        setInputValue(e.target.value);
    }


    const getTodo = useSelector(state => state.taskReducer);

  
    
    const dispatch = useDispatch();

    const addTask = () => {
        // const updateTodo = todos;
        // updateTodo.push(inputValue);
        // setTodos(updateTodo);
        // after doing set up of redux, we don't need updateTodo.
        setInputValue("");
        dispatch(addTodo(inputValue))
    }


    return (
        <>
            <header>
                <input onChange={changeValue} value={inputValue} className={styles.taskAddInput} placeholder="type your task" />
                <button onClick={addTask} className={styles.taskAddButton}>Add Task</button>
            </header>
            <main>
                {getTodo.map((todo, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Task todo={todo} />
                        </React.Fragment>
                    )
                })}
            </main>
        </>
    )
}


const Task = (props) => {

    const [todo, setTodo] = useState(props.todo);
    const [readOnly, setReadOnly] = useState(props.todo);


    const dispatch = useDispatch();
    const _updateTodo = (e) => {
        setTodo(e.target.value);

    }
    const todoHandler = () => {
        if (props.todo !== todo && !readOnly) {

            const data = {
                oldTodo: props.todo,
                newTodo: todo
            }

            // Pass by reference
            dispatch(updateTodo(data))


            // Pass by value
            // dispatch(updateTodo({
            //     oldTodo: props.todo,
            //     newTodo: todo
            // }))
        }


        setReadOnly(!readOnly)
    }

    const _deleteTodo = () => {
        dispatch(deleteTodo(props.todo));
    }

    return (
        <div className={styles.outputTodo}>
            <input onChange={_updateTodo} type="text" value={todo} readOnly={readOnly} />
            <div className={styles.buttonBar}>
                <button onClick={todoHandler} className={styles.updateButton}>{readOnly ? "Edit" : "Save"}</button>
                <button onClick={_deleteTodo} className={styles.updateButton}>Delete</button>
            </div>
        </div>
    )
}