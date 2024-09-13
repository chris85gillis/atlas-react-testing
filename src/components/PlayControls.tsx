import React, { useState } from 'react';
import { FaBackward, FaForward, FaPlay, FaPause, FaRandom } from 'react-icons/fa';

type PlayControlsProps = {
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  songsLength: number;
  isPlaying: boolean;
  togglePlay: () => void;
  isShuffling: boolean;
  toggleShuffle: () => void;
};

const PlayControls: React.FC<PlayControlsProps> = ({
  currentSongIndex,
  setCurrentSongIndex,
  songsLength,
  isPlaying,
  togglePlay,
  isShuffling,
  toggleShuffle,
}) => {
  const [speed, setSpeed] = useState(1);

  // Function to handle speed changes
  const handleSpeedChange = () => {
    setSpeed((prevSpeed) => (prevSpeed === 3 ? 1 : prevSpeed + 1));
  };

  // Function to go to the previous song
  const handleBack = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  // Function to go to the next song
  const handleForward = () => {
    if (isShuffling) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * songsLength);
      } while (randomIndex === currentSongIndex && songsLength > 1); // Prevent selecting the same song
      setCurrentSongIndex(randomIndex);
    } else if (currentSongIndex < songsLength - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {/* Speed Button */}
      <button
        onClick={handleSpeedChange}
        className="text-nightText hover:text-nightSecondary focus:outline-none"
      >
        {speed}x
      </button>

      {/* Back Button */}
      <button
        onClick={handleBack}
        disabled={currentSongIndex === 0}
        className="text-nightText hover:text-nightSecondary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaBackward />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="bg-nightAccent text-nightPrimary p-2 rounded-lg hover:bg-nightSecondary focus:outline-none"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* Forward Button */}
      <button
        onClick={handleForward}
        disabled={!isShuffling && currentSongIndex === songsLength - 1}
        className="text-nightText hover:text-nightSecondary focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaForward />
      </button>

      {/* Shuffle Button */}
      <button
        onClick={toggleShuffle}
        className={`p-2 rounded-lg focus:outline-none ${
          isShuffling ? 'bg-nightAccent text-white' : 'text-nightText hover:text-nightSecondary'
        }`}
      >
        <FaRandom />
      </button>
    </div>
  );
};

export default PlayControls;