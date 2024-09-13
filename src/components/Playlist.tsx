import React from 'react';
import PlayListItem from './PlayListItem';

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

type PlaylistProps = {
  songs: Song[];
  currentSongId: string;
  setCurrentSong: (song: Song) => void;
};

const Playlist: React.FC<PlaylistProps> = ({ songs, currentSongId, setCurrentSong }) => {
  return (
    <div className="mt-6 bg-nightPrimary p-4 rounded-custom shadow-custom">
      <h3 className="text-xl font-bold text-nightAccent mb-4">Playlist</h3>
      <div className="space-y-2">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => setCurrentSong(song)}
            className={`p-2 rounded-lg cursor-pointer ${
              song.id.toString() === currentSongId ? 'bg-nightAccent text-white' : 'bg-nightPrimary text-nightText'
            }`}
          >
            <PlayListItem title={song.title} genre={song.genre} length={song.duration} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;