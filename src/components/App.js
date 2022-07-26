import React, {useState, useEffect} from "react";
import AllTasks from "./AllTasks";
import Home from "./Home";
import NavBar from "./NavBar";
import "../App.css"
import { Route, Switch } from "react-router-dom";
import AddTaskForm from "./AddTaskForm";


function App (){

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(data => {
      setTodos(data)
    })
  },[])
  
  function handleUpdateItem(updatedItem) {
    const updatedItems = todos.map((item) => {
      if(item.id === updatedItem.id){
        return updatedItem;
      }
      return item;
    })
    setTodos(updatedItems)
  }

  
  console.log(todos)
  return (
    <div className="App ">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/all-tasks">
          <AllTasks allTodos={todos} onUpdateItem={handleUpdateItem}  />
        </Route>
        <Route exact path="/add-task">
          <AddTaskForm />
        </Route>
      </Switch>

    </div>
  )
}

export default App;




