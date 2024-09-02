import { useEffect, useState } from "react"


export default function Stories() {
    const [number, setNumber] = useState(1);
    const [todos, setTodos] = useState([])

    const fetchTodoItems = async (number) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`);
        const data = await response.json()
        setTodos([...todos, data])
        console.log(todos)
    }

    useEffect(() => {
        fetchTodoItems(number)
    }, [number])



    const handleIncrement = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            {todos.map((todo) =>
                (<div key={todo.id}>{todo.title}</div>)
            )}

            <button onClick={handleIncrement}>
                Increment
            </button>
        </div>
    )
}