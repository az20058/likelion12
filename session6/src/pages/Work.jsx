import React, { useState } from 'react';
import '../App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleDelete(item){
    console.log(todoList);
    const temp = todoList.indexOf(item);
    const updatedList = [...todoList.slice(0, temp), ...todoList.slice(temp+1)];
    //const updatedList = todoList.filter((item, index)=>index!==temp);
    setTodoList(updatedList);
    console.log(updatedList);
  }

  function handleClick() {
    setTodoList([todo, ...todoList]);
    setTodo('');
  }

  function handleChange(e) {
    setTodo(e.target.value);
  }

  return (
    <div className='asd'>
      <h1>Todo List</h1>
      <span><input onChange={handleChange} type='text' placeholder='Enter your todo' value={todo}></input></span>
      <button onClick={handleClick}>Add Todo</button>
      <div>
        {todoList.map((item) => (
          <div key={item}>
            <span>{item}</span>
            <button onClick={()=>handleDelete(item)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
