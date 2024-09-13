import React from 'react';
import MusicPlayer from './components/MusicPlayer.tsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;