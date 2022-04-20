import React,{useState} from 'react'
import Todoform from './Todoform';

function Todolist() {
    const [task,setTask]=useState("");
    const [todos,setTodos]=useState([]);
    const changeHandler=e=>{
        setTask(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault()
        console.log(task)
        const newTodos =[...todos,task]
        setTodos(newTodos);
        setTask("")
    }
    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index)=>index  !==indexValue)
        setTodos(newTodos)
    }
  return (
    <div>
        <center>
     <div className="card">
         <div className="card-body">
             <h1 className="card-title">Todo List Applications</h1>
             <form onSubmit={submitHandler}>
            <input type="text" name="task" value={task} onChange={changeHandler}/>  &nbsp;&nbsp;
            <input type="submit" name="Add" value="Add" className='bg'/>
             </form>
             <Todoform   todolist={todos} deleteHandler={deleteHandler}/>
         </div>
     </div>
     </center> 
    </div>
  )
}


export default Todolist