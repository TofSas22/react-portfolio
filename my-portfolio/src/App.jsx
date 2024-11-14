import Header from "./components/Header";
import BentoBox from "./components/BentoBox";
import About from "./components/About";

function App() {
  return (
    <div className="px-24">
      <Header />
      <BentoBox /> {/* Hero section */}
      <br />
      <About />
    </div>
  );
}

export default App;
