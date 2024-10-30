import gif from './assets/gif.webp';
import Navbar from "./components/Navbar"
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import { Routes, Route } from 'react-router-dom';
import Notes from './Pages/Notes';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background GIF */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.3'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes/:branch" element={<Notes />} />
        </Routes>
        <Footer />
        
        {/* Your other components */}
      </div>
    </div>
  );
}

export default App
