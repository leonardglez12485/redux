import { useState } from "react";
import { useGetTodoQuery} from "./store/api/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data, isLoading } = useGetTodoQuery(todoId);
  const title = data?.title || "No Title";
  const completed = data?.completed || false;

  const increment = () => {
    setTodoId(todoId + 1);
  };
  const decrement = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h2>ToDo App - RTK Query</h2>
      <hr />
      {isLoading && <h4> Loading... </h4>}
      <pre>
        <h4>{title}</h4>
        <strong>{completed ? "✅" : "❌"}</strong>
      </pre>
      
      {/* <ul style={{ listStyleType: "none"}}>
        {
            data?.map(todo => (
                <li key={todo.id}>
                <strong>{todo.completed ? '✅' : '❌'}</strong>
                {todo.title}
                </li>
            ))
        }
     </ul> */}

      <button 
    style={{ padding: '6px' }}
      disabled={isLoading || todoId <= 1}
      onClick={decrement}
      >Previous</button>
      <button 
      style={{ marginLeft: "10px", padding: '6px' }}
      onClick={increment}
      >Next</button>
    </>
  );
};
