import React from "react";
import{useState} from 'react'
import Two from "./Two";
const One = () => {
  const initialValue = {
    name: "",
    email: "",
    number: "",
  };
  const [Inputvalues, setInputvalues] = useState(initialValue);
  const [Todos,setTodos]=useState([]);
  /* const [views,setviews] = useState(false); */
  const changehandler = (e) => {
    setInputvalues({...Inputvalues, [e.target.name]: e.target.value});
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    /* setInputErrors(Validate(Inputvalues)) */
   const newtods=[...Todos,Inputvalues]
   setTodos(newtods);
   setInputvalues('[]');
  };
  const deleteHandler = (IndexValue)=>{
    const FilteredTodo = Todos.filter((elem,index)=> index !==IndexValue);
    setTodos(FilteredTodo);
}
const editHandler = (editIndexValue)=>{
  const FilteredTodo = Todos.filter((elem,index)=> index !== editIndexValue);
    setTodos(FilteredTodo);
  const editSelector = Todos.find((elem,index)=> index === editIndexValue);
  setInputvalues({
      name:editSelector.name,
      email:editSelector.email,
      number:editSelector.number, 
  })
}/* 
const Validate = (values)=>{
  const error = {};
  const OnlyNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const OnlyStrings = /^[a-zA-Z ]*$/;
  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if(!values.name){
      error.name='Name input should not be empty!'
  }else if(!values.name.match(OnlyStrings)){
      error.name='Please enter only Alphabets'
  }
  if(!values.email){
      error.email='Email input should not be empty!'
  }else if(!values.email.match(isEmail)){
      error.email='Please provide a valid email'
  }
  if(!values.number){
      error.number='Number input should not be empty!'
  }else if(!values.number.match(OnlyNum)){
      error.number='Please enter numbers only'
  }else if(values.number.length<10){
      error.number='Mobile number should contain atleast 10 characters'
  }else if(values.number.length>10){
      error.number='Mobile number max 10 Digit'
  }else if((values.number.charAt(0)===1)){
      error.number='Should not start with 1,2,3'
  }else if((values.number.charAt(0)===2)){
      error.number='Should not start with 1,2,3'
  }else if((values.number.charAt(0)===3)){
      error.number='Should not start with 1,2,3'
  }
} */
  return (
    <div>
      <h1>todo form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="name"
            value={Inputvalues.name}
            onChange={changehandler}
          />&nbsp;&nbsp;<br/>
        </div>
        <input
          type="email"
          name="email"
          value={Inputvalues.email}
          onChange={changehandler}
        />&nbsp;&nbsp;
        <br/>
        <input
          type="number"
          name="number"
          value={Inputvalues.number}
          onChange={changehandler}
        /> &nbsp; &nbsp;
        <input type="submit" value="add" name="add" className="bg-primary " />
       {/*  <input type='submit' value='SAVE' className='btn btn-primary rounded-0 px-4'/>
                            <button type='button' className='btn btn-success rounded-0 px-4'
                            onClick={()=> setviews(true)}>VIEW</button> */}
      </form>
      <Two todos={Todos }deleteHandler={deleteHandler}  editHandle={editHandler}/>
    </div>
  );
};

export default One;