import { Provider } from 'react-redux';
import store from './store/store';
import MainPage from './MainPage';
import UserRegistrationForm from './UserRegistrationForm';

function App() {
  return (
    <Provider store={store}>
      <div>
          <UserRegistrationForm></UserRegistrationForm>
      </div>
    </Provider>
  );
}

export default App;
