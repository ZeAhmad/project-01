import { useEffect, useState } from "react";
import { DisplayTodo } from "@/components";
import useSWR from 'swr';

const fetcher = (url: string) : any => fetch(url).then(r => r.json());

const Todos = () => {

    const [todos,setTodos] = useState<any[]>([])
    const [todo,setTodo]=useState<string>("");
    const {data, isLoading, error} = useSWR('https://jsonplaceholder.typicode.com/todos',fetcher);

 //   console.log("data from fetcher is ", data)

    useEffect(() => {
   //     console.log("use Effect");
      if (!isLoading && data?.length) {
        setTodos([...data])
      }
    },[data])

   
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