import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./IntroPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <Routes>
        <Route
          path="/intro"
          element={!user ? <IntroPage /> : <Navigate to={"/"} replace={true} />}
        />

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
