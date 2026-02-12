import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// UI Components
import AnimatedBackground from "./components/ui/AnimatedBackground";
import Navbar from "./components/ui/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Background Effects */}
          <AnimatedBackground />

          {/* Scroll Progress Indicator */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
