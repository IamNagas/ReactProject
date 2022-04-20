import React from 'react'

const Two = ({todos,deleteHandler,editHandler}) => {
  return (
    <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Delete/Edit</th>

            </tr>
          </thead>
          <tbody>
            {
              todos.map((todos,index)=>{
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{todos.name}</td>
                    <td>{todos.email}</td>
                    <td>{todos.number}</td>
                                         <td>
                                                  <td className='table-delete-edit_btn justify-content-between'>
                                                      <i className="fas fa-edit text-success mx-3"
                                                      onClick={()=>editHandler(index)}>Edit</i> 
                                                      <i className="fas fa-trash text-danger" 
                                                      onClick={()=>deleteHandler(index)}>Delete</i>
                                                  </td>
                                            </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default Two;