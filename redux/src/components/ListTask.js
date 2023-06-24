import React, { useState  , useRef , useEffect} from 'react'
import { connect } from 'react-redux'
// importing in the actions
import { addTask , taskComplete , filterByDone , filterByNotDone , updateTask} from '../Jsx/Actions/actions';


// mapping our state to props
const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}
// mapping our actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        taskComplete : (value) => dispatch(taskComplete(value)),
        addTask : (value) => dispatch(addTask(value)),
        filterByDone : () => dispatch(filterByDone()),
        filterByNotDone : () => dispatch(filterByNotDone()),
        updateTask : (id , value) => dispatch(updateTask(id , value))
    }
}
// reinitializer after the task is added
const setToDefault = (ref) => {
    ref.current.value = "";
}
// destructuring on props 
const ListTask = ({tasks , addTask , taskComplete , filterByDone , updateTask , filterByNotDone}) => {
// the useState hook to toggle the editing flag
const [isEditing , setIsEditing] = useState(false)
const [editedID , setEditedID] = useState(null)
const editElement = (id) => {
    setIsEditing(true)
    setEditedID(id)
    let edited = tasks.filter(item => item.id === id);
    ref.current.value = edited[0].description
}
// the useRef hook to acces our form value
const ref = useRef();
  return (
    <div className='container'>
        <div className="showcase">
        </div>
        <div className='container-dark'>
            <div className="todo-container">
            <div className='theme-switcher'>
                <h3>TO DO</h3>
            </div>
            <div className='input-field'>
                <input type="text" placeholder='Enter TO DO' className='input' id='input'  ref={ref} />  
                {/* conditional rendering depending on isEditing flag */}
                {!isEditing ?   <button type='submit' onClick={() => {
                    if(ref.current.value != "")  addTask(ref.current.value)
                 }
               
                }>Add</button>
                 : <button type='submit' onClick={() => {
                    setIsEditing(false)
                    updateTask(editedID , ref.current.value)
                    setToDefault(ref)
                }
                }>mide a jour</button>
                 }
              
                
            </div>
            <div className='task-container'>
                <ul className='todo-list'>
                    {/* mapping our list items */}
                    {
                        tasks.map(item => {
                            return <li key={item.id}>
                                <input type="checkbox" className='checkbox' defaultChecked={item.isDone} onChange={() => taskComplete(item.id)}/>
                                <p className='todo'>{item.description}</p>
                                <button type='button' className='btn btn-danger' onClick={() => {editElement(item.id)}}>
                                    Modifier
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className='filter'>
                {/* our filtering buttons */}
                <button type="button" onClick={() => filterByNotDone()}>Annuler</button>
                <button type="button" onClick={() => filterByDone()}>valider</button>
            </div>
        </div>
        </div>
    </div>
  )
}
// conncenting our listTask to our store
export default connect(mapStateToProps , mapDispatchToProps)(ListTask)