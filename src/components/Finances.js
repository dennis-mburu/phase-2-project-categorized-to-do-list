import React from "react";
import Tasks from "./Tasks";

function Finances ({allTodos, onUpdateTask, onDeleteTask}) {


    const workTasks = allTodos.filter(item => item.category === "finances")
    // console.log(workTasks)


    return (
        <div className="ShoppingList">
            <p>Work & Finance Related Tasks come Here</p>
            <ul className="Items">{workTasks.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}

export default Finances;