import { Link, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Link to='/home'>Home</Link> &nbsp;&nbsp;
      <Link to='/contact'>Contact Us</Link>&nbsp;&nbsp;
      <Link to='/about'>About Us</Link>
      <Outlet/>
    </div>
  );
}

export default App;
