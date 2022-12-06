import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoProps {
  id: number;
  name: string;
}
export interface ExampleState {
  count: number;
  todos: TodoProps[];
}

const initialState: ExampleState = {
  count: 1,
  todos: [],
};

export const exampleSlice = createSlice({
  name: "ExampleReducer",
  initialState,
  reducers: {
    addTodo($state: ExampleState, action: PayloadAction<TodoProps>) {
      $state.todos = [...$state.todos, action.payload];
    },
    removeTodo($state: ExampleState, action: PayloadAction<TodoProps>) {
      const index = $state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        $state.todos.splice(index, 1);
      }
    },
  },
});

export const { addTodo, removeTodo } = exampleSlice.actions;

export const useExampleActionHook = () => ({ ...exampleSlice.actions });

export default exampleSlice.reducer;
