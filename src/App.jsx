// Import components from React Router.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import required components.
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import "./App.css";

//Import the useState hook from React.
import { useState } from "react";

function App() {
  //State variable used to store and update the current theme.
  // false = light mode
  // true = dark mode
  const [theme, setTheme] = useState(false);

  return (
    // Dynamically apply CSS classes based on the theme.
    // If theme is true, the 'theme-dark' class will be applied.
    <div className={`container mt-5 ${theme ? "theme-dark" : ""}`}>
      {/* Theme Toggle Switch */}
      <div className="form-check form-switch m-3">
        <input
          className="form-check-input"
          type="checkbox"
          // // Toggle the theme state when clicked.
          onClick={() => setTheme(!theme)}
        />

        {/* Label change*/}
        <label className="form-label">
          {theme ? "Light Mode" : "Dark Mode"}
        </label>
      </div>

      {/* Router Start */}
      <BrowserRouter>
        <Routes>
          {/* Create Page */}
          <Route exact path="/" element={<Create />} />

          {/* Read Page */}
          <Route exact path="/read" element={<Read />} />

          {/* Update Page */}
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
