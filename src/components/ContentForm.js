import React from "react";

function ContentForm({data, setData}){
    const {title, description, todos} = data;

    

    return(
        <div>
            <h3>Add a new Goal, todo or reminder Here:</h3>
            <form>
                <label>
                    New To-Do <br></br>  
                    <input 
                    type="text"
                    name="todo"
                    placeholder="type new item here"
                    />
                    
                </label>
                <button>Add to-do</button>
            </form>
        </div>
    )
}

export default ContentForm;