import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Shorten from "./components/Shorten";
import Stats from "./components/Stats";


function App() {
  return <div className="App">
    <NavBar />
    <Hero />
    <Shorten />
    <Stats />
    <Features />
    <CTA />
    <Footer />
  </div>;
}
export default App;
