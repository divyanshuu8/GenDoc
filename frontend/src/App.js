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
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import getMPTheme from "./Components/theme/getMPTheme";

function App() {
  const mode = "light"; // Set mode to light directly
  const MPTheme = createTheme(getMPTheme(mode));

  return (
    <ThemeProvider theme={MPTheme}>
      <CssBaseline />
      <NavBar />

      <div>
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
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
