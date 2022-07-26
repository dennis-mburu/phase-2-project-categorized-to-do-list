import React, { useState } from "react";

function AddTaskForm(){

    const[task, setTask] = useState("");
    const[category, setCategory] = useState("daily");

    return(
        <div>
            <form className="NewItem">
                <label>
                    New Task: 
                    <input 
                        type="text"
                        name="todos"
                        value={task}
                    />
                </label>

                <label>
                    Category:
                    <select
                        name="category"
                        value={category}
                    >
                        <option value="daily">Daily chores and Routines</option>
                        <option value="finances">Career Prosperity and Financial Freedom</option>    
                        <option value="people">Strong Family ties, healthy friendships and relationships</option>    
                        <option value="mind-care">Self Growth and Development</option>    
                    </select>    
                </label>
            </form>
        </div>
    )
}

export default AddTaskForm