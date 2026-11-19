
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Atmosphere from "./components/Atmosphere";
import BackgroundMusic from "./components/BackgroundMusic";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import YouTubeTracker from "./sections/YouTubeTracker";
import Gallery from "./sections/Gallery";
import GameZone from "./sections/GameZone";
import Songs from "./sections/songs";
import Announcements from "./sections/Announcements";
import About from "./sections/About";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Preloader />
      <ScrollProgress />

      <Atmosphere />
      <BackgroundMusic />

      <Navbar />

      <main>
        <Hero />
        <YouTubeTracker />
        <Gallery />
        <GameZone />
        <Songs />
        <Announcements />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
