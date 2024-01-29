import { Provider } from 'react-redux';
import store from './store/store';
import Header from './Header';

function App() {
  return (
    <Provider store={store}>
      <div>
          <Header></Header>
      </div>
    </Provider>
  );
}

export default App;
