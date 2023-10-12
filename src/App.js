import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import TodoContext from './context/TodoContext';

function App()  {

  const [list, setList ] = useState([
    {id: 1, todoData : 'todo 1', finished:false},
    {id: 2, todoData: 'todo 2',finished:false}
]);

  return (
    <TodoContext.Provider value = {{list, setList}}>
      <AddTodo updateList = {(todo) => setList ([
        ...list, {id:list.length + 1, todoData: todo, finished: false}
      ])} />
      <TodoList/>

    </TodoContext.Provider>
  );
}


export default App;
