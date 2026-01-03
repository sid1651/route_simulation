import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Simulator from "./pages/Simulator";
import Customers from "./pages/Customers";

export default function App() {
  return (
    <Router>
      {/* Simple Admin Navigation */}
      <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Route Simulation
        </Link>
        <Link to="/customers">
          Customer Lifecycle
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </Router>
  );
}
