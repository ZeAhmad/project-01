import { useEffect } from "react";
const DisplayTodo = (props: any) => {

    const {todo} :any = props;
   /* useEffect(() => {
        console.log("use effect props",todo) 
    },[])
*/
    return (
            <li style={{ color: todo?.completed ? 'green' : 'black'}}>{todo?.title}</li>
        )
}

export default DisplayTodo