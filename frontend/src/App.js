import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Divider from "@mui/material/Divider";
import LogoCollection from "./Components/LogoCollection";
import Highlights from "./Components/Highlights";
import Pricing from "./Components/Pricing";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import Products from "./Components/Products";
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
            element={
              <>
                <Hero />
                <LogoCollection />
                <Features />
                <Divider />
                <Testimonials />
                <Divider />
                <Highlights />
                <Divider />
                <Pricing />
                <Divider />
                <FAQ />
                <Divider />
              </>
            }
          />

          {/* Products route */}
          <Route path="/products" element={<Products />} />
        </Routes>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
