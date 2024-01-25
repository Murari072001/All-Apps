import { Provider } from 'react-redux';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter3 from './Counter3';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
        <Counter3></Counter3>
      </div>
    </Provider>
  );
}

export default App;
