import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { darkTheme, lightTheme } from "./utils/Themes";

const Wrapper = styled.div`
  background: radial-gradient(
      60% 60% at 10% 10%,
      rgba(124, 58, 237, 0.12) 0%,
      rgba(124, 58, 237, 0) 60%
    ),
    radial-gradient(
      50% 50% at 90% 20%,
      rgba(6, 182, 212, 0.12) 0%,
      rgba(6, 182, 212, 0) 55%
    );
  width: 100%;
  min-height: 100vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  // LIGHT MODE DEFAULT
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Wrapper>
          <HeroSection />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
