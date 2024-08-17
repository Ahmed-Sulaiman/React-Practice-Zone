import "./App.css";
import TodoForm from "./react-query/components/TodoForm";
import TodoList from "./react-query/components/TodoList";

function App() {
  return (
    <>
      <h1>React Starter Project</h1>
      {/* <TodoList /> */}
      {/* <PostList /> */}
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
