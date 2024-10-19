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
      <section>
        <Features />
      </section>
      <Divider />
      <section >
        <Testimonials />
      </section>
      <Divider />
      <section >
        <Highlights />
      </section>
      <Divider />
      <section >
        <Pricing />
      </section>
      <Divider />
      <section >
        <FAQ />
      </section>
      <Divider />
    </div>
  );
};

export default Home;
