import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/Input_Form';
import Todo from './components/todo';
import "./style.css";

const App = () => {
  const [tasks,setTasks]=useState([]);
  const addTask = (task) => {
    setTasks([...tasks,{text:task,completed:false}]);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_,i)=> i !==index);
    setTasks(newTasks);
  };
  const toggleTask=(index)=>{
    const newTasks=tasks.map((task,i)=> i===index?{...task,completed:!task.completed}:task);
    setTasks(newTasks);
  };
  return(
    <div className='App'>
      <Header/>
      <InputForm addTask={addTask}/>
      <Todo tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}></Todo>
    </div>
  );
};

export default App;
