import Countries from "./features/Countries/Countries";

import { store } from './app/store'
import { Provider } from 'react-redux'
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    
    <Provider store={store}>
      <div className="border border-3 border-dark m-3 p-2">
      <Link to='/countries'>All Countries</Link>
      <Outlet></Outlet>
    </div>
    </Provider>
  );
}

export default App;
