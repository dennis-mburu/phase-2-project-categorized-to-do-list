import React from "react";
import Tasks from "./Tasks";

function SocialLife({allTodos, onUpdateTask, onDeleteTask}){
    // console.log(todos)
    const socialTodos = allTodos.filter(item => item.category === "people")
    // console.log(dailyTodos)

    return (
        <div className="ShoppingList">
            <p>Social Tasks Come Here</p>
            <ul className="Items">{socialTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default SocialLife;