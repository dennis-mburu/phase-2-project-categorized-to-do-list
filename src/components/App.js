import React, {useState, useEffect} from "react";
import AllTasks from "./AllTasks";
import Home from "./Home";
import NavBar from "./NavBar";
import "../App.css"
// import PhysicalHealth from "./PhysicalHealth";


function App (){

  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(data => {
      setTodos(data)
      setIsLoaded(true)
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
      <Home />
      {/* <PhysicalHealth /> */}
      <AllTasks allTodos={todos} onUpdateItem={handleUpdateItem}  />
      {/* {isLoaded ? <AllTasks allTodos={todos} /> : "Loading..."} */}
    </div>
  )
}

export default App;



// import logo from '../logo.svg';
// import '../App.css';
// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }

// export default App;
