import { Outlet } from "react-router-dom";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
