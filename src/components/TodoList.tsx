import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store";
import { removeTodo } from "../state/todo/todoSlice";

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
  
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center shadow-sm border rounded-2 p-2 mb-2">
            {todo.text}
            <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeTodo(todo.id))}><i className="bi bi-trash-fill"></i></button>
          </li>
        ))}
      </ul>
    );
};

export default TodoList
  