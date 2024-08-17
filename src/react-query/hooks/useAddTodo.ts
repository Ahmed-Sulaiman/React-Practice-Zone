import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../constants/constant";

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo>({
      mutationFn: (todo: Todo) =>
        axios
          .post<Todo>("https://jsonplaceholder.typicode.com/posts", todo)
          .then((res) => res.data),

      onSuccess: (savedTodo) => {
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
          savedTodo,
          ...todos,
        ]);
  
        onAdd();
      },
    });
  
}

export default useAddTodo;