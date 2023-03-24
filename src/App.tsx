import { Route, Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./IntroPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/intro" element={<IntroPage />} />

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
