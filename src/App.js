import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <div>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
