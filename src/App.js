import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import MainApp from "./Staticpage/main";
import Data from "./data/data";
import Graph from "./data/graph";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="global">
          <Data />
        </div>
        <Routes>
          <Route path="/main" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
