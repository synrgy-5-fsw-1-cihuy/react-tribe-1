import "./App.css";
import Header from "./components/header/Header";
import CarouselTribe from "./components/carousel/Carousel";
import ContentTribe from "./components/content/Content";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselTribe />
      <ContentTribe />
      <Footer />
    </div>
  );
}

export default App;
