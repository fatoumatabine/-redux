import { ADD_TASK, EDIT_TASK , TASK_COMPLETE , DONE_TASK, NOT_DONE_TASK } from "../Constants/constants";
const initialTask = {
    tasks : [
    {
        id : 1,
        description  : "complete react checkpoint",
        isDone : true,
    },
    {
        id : 2,
        description  : "Go to the market",
        isDone : true,
    },
    {
        id : 3,
        description  : "Do redux challenge",
        isDone : false,
    }
]}
export const rootReducer = (state = initialTask , action) => {
    switch (action.type) {
        case ADD_TASK:return {
            tasks : [
                ...state.tasks , action.payload
            ]
    }
        case TASK_COMPLETE :
        const chexkedList = state.tasks.map(item => {
                if(item.id === action.payload.id && item.isDone === false){
                    item.isDone = true
                }else {item.isDone = false}
                return item
            })
        return {
           tasks : chexkedList
        }
        case DONE_TASK : 
        const filteredList = state.tasks.filter(item => {
            if(item.isDone == true) return item
        })
        return {
            tasks : filteredList
        }
        case EDIT_TASK :
        const editedTasks = state.tasks.map(item => {
            if(item.id === action.payload.id) item.description = action.payload.description
            return item
        })
        return {
            tasks :  editedTasks
        }
        case NOT_DONE_TASK:
            const notDone = state.tasks.filter(item => item.isDone == false)
        return {
            tasks : notDone
        }
    default: return state
    }
}