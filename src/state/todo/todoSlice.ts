import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Todo {
    id: number;
    text: string;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
      addTodo: (state: Todo[], action: PayloadAction<string>) => {
        state.push({ id: Date.now(), text: action.payload });
      },
      removeTodo: (state: Todo[], action: PayloadAction<number>) => {
        return state.filter(todo => todo.id !== action.payload);
      }
    }
});
  
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;