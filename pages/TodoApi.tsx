import { useEffect, useState } from "react";
import { DisplayTodo } from "@/components";
const Todos = () => {

    const [todos,setTodos] = useState<any[]>([])
    const [todo,setTodo]=useState<string>("");

    useEffect(() => {
        console.log("use Effect");
        callApi();
    },[])

    const callApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos([...json]))
    }
    const addToDo = () => {
        console.log("value of todo is "+ todo)
        let obj : object = {
            completed: false,
            title: todo,
            userId: 1,
            id: todo?.length+1
        }
        todos.push(obj);
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