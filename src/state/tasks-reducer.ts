import {TasksStateType} from "../App";
import {v1} from "uuid";
import {
    AddTodolistActionType,
    RemoveTodolistActionType
} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistID: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistID: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    isDone: boolean
    todolistID: string
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    title: string
    todolistID: string
}


export type ActionsType=AddTodolistActionType|RemoveTodolistActionType|RemoveTaskActionType|AddTaskActionType|ChangeTaskStatusActionType|ChangeTaskTitleActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':{
            // let stateCopy={...state}
            // let todolistTasks = state[action.todolistID] ;
            // stateCopy[action.todolistID] = todolistTasks.filter(t => t.id != action.taskId);
            // return stateCopy
            return {...state, [action.todolistID]: state[action.todolistID].filter(t=>t.id!==action.taskId) }
        }

        case "ADD-TASK": {
            // let stateCopy={...state}
            // let tasks=stateCopy[action.todolistID]
            // stateCopy[action.todolistID]=[{id: v1(), title: action.title, isDone: false}, ...tasks]
            // return stateCopy
            return{...state,[action.todolistID]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistID]] }
        }

        case "CHANGE-TASK-STATUS":{
            // let stateCopy={...state}
            // let task = stateCopy[action.todolistID].find(t => t.id === action.taskId);
            // if (task) {
            //     task.isDone = action.isDone;
            // }
            // return stateCopy
            return {
                ...state,
                [action.todolistID]: state[action.todolistID].map(
                    t => t.id === action.taskId ? {...t, isDone: action.isDone} : {...t})
            }
        }

        case "CHANGE-TASK-TITLE":{
            // let stateCopy={...state}
            // let task = stateCopy[action.todolistID].find(t => t.id === action.taskId);
            // if (task) {
            //     task.title = action.title;
            // }
            // return stateCopy
            return {
                ...state,
                [action.todolistID]: state[action.todolistID].map(
                    t => t.id === action.taskId ? {...t, title: action.title} : {...t})
            }
        }

        case "ADD-TODOLIST": {
            return {...state, [action.todolistId]:[]}
        }
        case "REMOVE-TODOLIST":{
            // let stateCopy={...state}
            // delete stateCopy[action.id]//удаляем св-во из объекта
            // return stateCopy
            const {[action.id]: remote, ...rest}={...state}
            return rest
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistID: string): RemoveTaskActionType => {
    return{ type: 'REMOVE-TASK', taskId: taskId, todolistID:todolistID}
}
export const addTaskAC = (title: string, todolistID: string): AddTaskActionType => {
    return{ type: 'ADD-TASK', title: title, todolistID:todolistID }
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistID: string): ChangeTaskStatusActionType => {
    return{ type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistID }
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistID: string): ChangeTaskTitleActionType => {
    return{ type: 'CHANGE-TASK-TITLE', taskId, title, todolistID }
}

