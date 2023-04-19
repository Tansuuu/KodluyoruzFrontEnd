import "./App.css";
import Home from "./compenents/Home";
import About from "./compenents/About";
import Users from "./compenents/Users";
import User from "./compenents/User";
import Error404 from "./compenents/Error404";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/users" Component={Users}>
            <Route path=":id" Component={User} />
          </Route>
          <Route path="*" Component={Error404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Component={Home} yerine element={<Home/>} şeklinde de yazılabilir !!!
// "exact" Home baştayken sayfa değiştirmesi için eklenmeliydi ama yeni güncellemede sorun olmuyor.
