import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div
      className="container mx-auto px-12 flex flex-col justify-center md:block items-center "
      >
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
