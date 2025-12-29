import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import RequestQuote from "./sections/RequestQuote";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
        <RequestQuote />
      </main>

      <Footer />
    </>
  );
}

export default App;
