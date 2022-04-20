import React from 'react'

const Todoform = ({todolist,deleteHandler}) => {
  return (
    <div>
        {
            todolist.map((todo,index)=>
                <div key={index}>
                   <h2> {todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h2>
                </div>
            )}
    </div>
  )
}

export default Todoform