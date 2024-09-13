import { useState, useEffect } from 'react';

// Define the type for a Song
export type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
};

// Custom hook for fetching playlist data
const usePlaylistData = () => {
  const [data, setData] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist'
        );
        const result: Song[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching playlist:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return { data, loading };
};

export default usePlaylistData;