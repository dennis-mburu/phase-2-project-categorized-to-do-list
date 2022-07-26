import Tasks from "./Tasks";

function AllTasks({allTodos, onUpdateItem}){
    // console.log(allTodos)
    return(
        <div className="ShoppingList">
            <p>All Tasks will be displayed Here</p>
            <ul className="Items">{allTodos.map(item => <Tasks 
            key={item.id}
            onUpdateItem={onUpdateItem} 
            item={item}/>)}
            </ul>
        </div>
    )
}

export default AllTasks;