import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import for Route
import Main from "./components/Main";
import BusinessIdentityPage from "./components/BusinessIdentityPage";

function App() {
  return (
    <BrowserRouter>
    <div className="m-4">
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/business-identity" element={<BusinessIdentityPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
