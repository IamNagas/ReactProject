const editHandler = (editIndexValue)=>{
    const FilteredTodo = Todos.filter((elem,index)=> index !== editIndexValue);
    setTodos(FilteredTodo);
    const editSelector = Todos.find((elem,index)=> index === editIndexValue);
    setInputvalues({
        name:editSelector.name,
        email:editSelector.email,
        number:editSelector.number,
        project_name:editSelector.project_name,
        task_description:editSelector.task_description,
        start_date:editSelector.start_date,
        end_date:editSelector.end_date,
        status:editSelector.status
    })
}