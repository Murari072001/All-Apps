import AllPlayers from "./features/Players/AllPlayers";
import SelectedPlayers from "./features/Players/SelectedPlayers";

function App() {
  return (
    <div className="border border-3 border-dark m-3 p-2 d-flex flex-wrap">
      <AllPlayers></AllPlayers>
      <SelectedPlayers></SelectedPlayers>
    </div>
  );
}

export default App;
