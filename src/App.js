import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router';
import Header from './Header';

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
    </Provider>
  );
}

export default App;
