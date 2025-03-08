import { useEffect, useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../state/todo/todoSlice";

const TodoForm: React.FC = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
      inputRef.current?.focus(); // Focus input on initial render
    }, []);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input.trim()) {
        dispatch(addTodo(input));
        setInput("");
        inputRef.current?.focus(); 
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
        <input
          type="text"
          ref={inputRef}
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task"
        />
        <button type="submit" className="btn btn-success"><i className="bi bi-plus fs-3 fw-bold"></i></button>
      </form>
    );
  };
  
  export default TodoForm