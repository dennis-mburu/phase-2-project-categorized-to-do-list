import Tasks from "./Tasks";

function AllTasks({allTodos,  onUpdateTask, onDeleteTask}){
    // console.log(allTodos)
    return(
        <div className="ShoppingList">
            <p>All Tasks will be displayed Here</p>
            <ul className="Items">{allTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
            item={item}/>)}
            </ul>
        </div>
    )
}

export default AllTasks;