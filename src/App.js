import { Provider } from 'react-redux';
import store from './store/store';
import UserForm from './UserRegistrationForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <UserForm></UserForm>
      </div>
    </Provider>
  );
}

export default App;
