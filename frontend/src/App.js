import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/HomePage/Home";

import Products from "./Components/ProductPage/Products";
import SignIn from "./Components/sign-in/SignIn";
import getMPTheme from "./Components/theme/getMPTheme";

function App() {
  const mode = "light"; // Set mode to light directly
  const MPTheme = createTheme(getMPTheme(mode));

  return (
    <ThemeProvider theme={MPTheme}>
      <CssBaseline />
      <Router>
        <NavBar />

        <Routes>
          {/* Home route ("/") */}
          <Route
            path="/"
            element={<Home />} // Pass ref to Home
          />
          {/* Products route */}
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
