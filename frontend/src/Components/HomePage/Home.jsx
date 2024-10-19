import React from "react";

import Hero from "./Hero";
import Divider from "@mui/material/Divider";
import LogoCollection from "./LogoCollection";
import Highlights from "./Highlights";
import Pricing from "./Pricing";
import Features from "./Features";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoCollection />
      <section id="features">
        <Features />
      </section>
      <Divider />
      <section id="testimonials">
        <Testimonials />
      </section>
      <Divider />
      <section id="highlights">
        <Highlights />
      </section>
      <Divider />
      <section id="pricing">
        <Pricing />
      </section>
      <Divider />
      <section id="faq">
        <FAQ />
      </section>
      <Divider />
    </div>
  );
};

export default Home;
