import React from "react";
import Navbar from "./homeComponents/Navbar";
import Heading from "./homeComponents/Heading";
import About from "./homeComponents/About";
import Contact from "./homeComponents/Contact";
import Footer from "./homeComponents/Footer";

function Home() {
    return (
        <div>
          <Navbar />
          <Heading />
          <About />
          <Footer />
          <Contact />
        </div>
      );
}

export default Home;