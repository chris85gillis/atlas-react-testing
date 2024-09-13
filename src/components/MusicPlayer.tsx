import React, { useState } from 'react';
import Playlist from './Playlist';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';
import usePlaylistData from '../hooks/usePlaylistData';
import { Song } from '../hooks/usePlaylistData';

const MusicPlayer: React.FC = () => {
  const { data: songs, loading } = usePlaylistData();
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Update both the current song and index when changing songs
  const updateCurrentSong = (index: number) => {
    setCurrentSongIndex(index);
    setCurrentSong(songs[index]);
  };

  // Toggle play/pause
  const togglePlay = () => setIsPlaying((prev) => !prev);

  // Toggle shuffle mode
  const toggleShuffle = () => setIsShuffling((prev) => !prev);

  // Set the first song as currently playing when data is loaded
  React.useEffect(() => {
    if (songs.length > 0) {
      setCurrentSong(songs[0]);
      setCurrentSongIndex(0);
    }
  }, [songs]);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-4 bg-nightBg rounded-lg shadow-md w-full max-w-5xl mx-auto">
      {loading ? (
        <div className="text-center text-xl text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="flex-1 min-h-[400px] md:min-h-[600px]">
            {currentSong && (
              <>
                <CoverArt artwork={currentSong.cover} />
                <SongTitle title={currentSong.title} author={currentSong.artist} />
                <PlayControls
                  currentSongIndex={currentSongIndex}
                  setCurrentSongIndex={updateCurrentSong}
                  songsLength={songs.length}
                  isPlaying={isPlaying}
                  togglePlay={togglePlay}
                  isShuffling={isShuffling}
                  toggleShuffle={toggleShuffle}
                />
                <VolumeControl onVolumeChange={(volume) => console.log(`Volume set to ${volume}`)} />
              </>
            )}
          </div>
          <div className="flex-1 w-full mt-6 md:mt-0">
            <Playlist songs={songs} currentSongId={currentSong?.id.toString() || ''} setCurrentSong={setCurrentSong} />
          </div>
        </>
      )}
    </div>
  );
};

export default MusicPlayer;