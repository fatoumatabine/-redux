// importing constant from teh constants file
import { ADD_TASK , DONE_TASK, EDIT_TASK , FILTER_TASK , TASK_COMPLETE , NOT_DONE_TASK} from "../Constants/constants"
// setting a addtask action-creator
export const addTask = (value) => {
    return {
        type : ADD_TASK,
        payload : {
            id : new Date().getTime(),
            description : value,
            isDone : false
        }
    }
}
// setting a filter taskcomplete action-creator
export const taskComplete = (id) => {
    return {
        type : TASK_COMPLETE,
        payload : {
            id : id
        }
    }
}
// setting a filterByDONE ACTION-CREATOR
export const filterByDone  = () => {
    return {
        type : DONE_TASK
    }
}
// setting a filterByDONE ACTION-CREATOR
export const filterByNotDone = () => {
    return {
        type : NOT_DONE_TASK
    }
}

// setting a EDITTASK ACTION-CREATOR
export const updateTask = (id , value) => {
    return {
        type : EDIT_TASK,
        // THE UPDATED VALUE
        payload : {
            id : id,
            description : value,
        }
    }
}
export const filterTask = () => {
    return {
        type : FILTER_TASK
    }
}
