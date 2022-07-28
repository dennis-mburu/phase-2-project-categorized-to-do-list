import React from "react"
import Tasks from "./Tasks"

function MindCare ({allTodos, onUpdateTask, onDeleteTask}){

    const mindTasks = allTodos.filter(item => item.category === "mind-care")


    return (
        <div className="ShoppingList">
            <p>Mind-care, Recreational Tasks Come Here</p>
            <ul className="Items">{mindTasks.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default MindCare