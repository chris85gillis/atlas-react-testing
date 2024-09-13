import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist",
    () => {
      return HttpResponse.json([
        {
            id: 1,
            title: 'Mocked Song 1',
            artist: 'Mock Artist',
            genre: 'Mock Genre',
            duration: '4:00',
            cover: 'https://example.com/mock-cover-1.jpg',
          },
          {
            id: 2,
            title: 'Mocked Song 2',
            artist: 'Mock Artist 2',
            genre: 'Mock Genre 2',
            duration: '3:30',
            cover: 'https://example.com/mock-cover-2.jpg',
          },
      ]);
    }
  ),
];

export const server = setupServer(...handlers);