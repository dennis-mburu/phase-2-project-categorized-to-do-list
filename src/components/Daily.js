import React from "react";
import Tasks from "./Tasks";

function Daily({allTodos, onUpdateTask, onDeleteTask}){
    // console.log(todos)
    const dailyTodos = allTodos.filter(item => item.category === "daily")
    // console.log(dailyTodos)

    return (
        <div className="ShoppingList">
            <p>Daily Tasks Come Here</p>
            <ul className="Items">{dailyTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default Daily