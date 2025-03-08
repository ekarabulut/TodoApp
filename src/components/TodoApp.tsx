import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    
    return (
        <div className="container mt-5 col-md-6">
            <h1 className="text-center mb-4">TODO List</h1>  
            <TodoForm />
            <TodoList />            
        </div>
      );
}

export default TodoApp