import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-3 border-dark m-3 p-2">
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
  );
}

export default App;
