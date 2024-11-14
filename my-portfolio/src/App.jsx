import Header from "./components/Header";
import BentoBox from "./components/BentoBox";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="px-24">
        <BentoBox />
        <br />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
