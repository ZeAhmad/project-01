import { useState } from "react";
import { DisplayTodo } from "@/components";
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
             <h1>This is my Component based Todo List</h1>
             <input 
                placeholder="Add your task"
                onChange={(e)=> setTodo(e?.target?.value)}
                value = {todo}
                />&nbsp; 

             <button onClick={addToDo}>Add todo</button>
             <br />
             <br />
             <br />
             <ol>
                {
                 todos?.map((v,i) => {
                    return(
                        <DisplayTodo todo={v} key={i} />
                    )
                 })                    
                }
             </ol>
        </>
        );
}
export default Todos