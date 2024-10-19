import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/HomePage/Home";

import SignIn from "./Components/sign-in/SignIn";
import getMPTheme from "./Components/theme/getMPTheme";
import SignUp from "./Components/sign-up/SignUp";
import Products from "./Components/ProductPage/Products";

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
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
