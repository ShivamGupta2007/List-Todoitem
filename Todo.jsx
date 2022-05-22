import React from "react";
import { TodoItem } from "./TodoItem";
import {v4 as uuid} from "uuid";

function Todo (){
    const [query, setQuery] = React.useState("");
    const [todos, setTodo] = React.useState([]);
    const handleAdd = () => {
        const payload ={
            title: query,
            status: false,
            id: uuid(),

        };
        setTodo([...todos, payload])
    };
    const handleDelete =(id) =>{    

        let updateditem = todos.filter(item => item.id !== id)
        setTodo(updateditem);
    };
    return(
        <>
        <h1>List of TodoItems</h1>
        <div>
            <input class="input"
            value={query} 
            onChange = {(e)=>setQuery(e.target.value)}
            type="text" 
            placeholder="Write Something" 
            />
            <button class="add" onClick={handleAdd}>+</button>
        </div>
        <div>
            {todos.length > 0 && `Count is ${todos.length}`}
        </div>  
        <div>
        {todos.map((item) =>{
        return (
            <TodoItem handleDelete={handleDelete} key={item.id} {...item} />
        );
        })}
        </div>
        </>
    );
}

export { Todo }