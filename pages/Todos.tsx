import { useState } from "react";
const Todos = () => {

    const [todos,setTodos] = useState<string[]>([])
    const [todo,setTodo]=useState<string>("");

    const addToDo = () => {
        console.log("value of todo is "+ todo)
        todos.push(todo);
        setTodos([...todos]);
        setTodo('');
    }
    return (
        <>
             <h1>This is my first tooo List</h1>
             <input 
                placeholder="Add your task"
                onChange={(e)=> setTodo(e?.target?.value)}
                value ={todo}
                />&nbsp; 

             <button onClick={addToDo}>Add todo</button>
             <br />
             <br />
             <br />
             <div>
                {
                 todos?.map((v,i) => {
                    return(
                        <p key={i}> {v} </p>
                    )
                 })                   
                }
             </div>
        </>
        );
}
export default Todos