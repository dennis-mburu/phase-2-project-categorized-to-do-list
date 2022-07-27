import React, { useState } from "react";

function AddTaskForm({onAddTask}){

    const[task, setTask] = useState("");
    const[category, setCategory] = useState("daily");
    // console.log(task, category)

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:4000/todos", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                task: task,
                category: category,
                isDone: false
            })
        })
        .then(res => res.json())
        .then (newTask => onAddTask(newTask))
        setTask('')
    }

    return(
        <div>
            <form className="NewItem" onSubmit={handleSubmit}>
                <label>
                    New Task: 
                    <input 
                        type="text"
                        name="todos"
                        value={task}
                        placeholder="Enter New Task Here..."
                        onChange={(e) => setTask(e.target.value)}
                    />
                </label><br></br>

                <label>
                    Category:
                    <select
                        name="category"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                    >
                        <option value="daily">Daily chores and Routines</option>
                        <option value="finances">Career Prosperity and Financial Freedom</option>    
                        <option value="people">Strong Family ties, healthy friendships and relationships</option>    
                        <option value="mind-care">Self Growth and Development</option>    
                    </select>    
                </label><br></br>

                <button type="submit">Add New Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm