import React from "react";



function Content ({data}){
    console.log(data)
    return(
        <div>
            <p>Inside Content Component</p>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <ul >{data.todos.map((todo, index) => {
                return <div key={index}><li >{todo}</li>
                <button >Done</button>
                </div>
            })}                
            </ul>
        </div>
    )
}

export default Content