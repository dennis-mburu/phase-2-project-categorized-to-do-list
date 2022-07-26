import React from "react";

function Tasks ({item, onUpdateItem}){
    // console.log(item);
    const {task, category, isDone, id} = item
    function handleDoneStatus(){
        fetch(`http://localhost:4000/todos/${item.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              isDone: !isDone,
            }),
          })
            .then((r) => r.json())
            .then((updatedItem) => onUpdateItem(updatedItem));
    }

    return(
        <li className={isDone ? "in-cart" : ""}>
            <span>{task}</span>
            <span className="category">{category}</span>
            <button className={isDone  ? "remove" : "add"}
            onClick={handleDoneStatus}>
                {isDone ? "Mark as Undone" : "Mark as Done"}
            </button>
        </li>
    )
}

export default Tasks