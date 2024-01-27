import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <div>
      </div>
    </Provider>
  );
}

export default App;
