import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Report from "./components/pages/Report";
import HomePage from "./components/pages/Homepage";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
