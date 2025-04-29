import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import AttractionsSection from "./components/AttractionsSection/AttractionsSection";
import GallerySection from "./components/GallerySection/GallerySection";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import "./styles/global.css";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <AttractionsSection />
                <GallerySection />
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default App;
