import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import GlobalStyles from "./components/styles/Global";
import styled from "styled-components";
import line from "./components/assets/line.png";
import logo from "./components/assets/logo.png";
import moon from "./components/assets/moon1.png";
import search from "./components/assets/search.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero line={line} moon={moon} />
      <Who />
      <Works />
      <Contact />
    </>
  );
}

export default App;
