import Countries from "./features/Countries/Countries";

import { store } from './app/store'
import { Provider } from 'react-redux'
function App() {
  return (
    
    <Provider store={store}>
      <div className="border border-3 border-dark m-3 p-2">
      <Countries></Countries>
    </div>
    </Provider>
  );
}

export default App;
