import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { PlaylistCard } from "@/components/PlaylistCard";
import { useState } from "react";
import { usePlayer } from "@/contexts/PlayerContext";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { playTrack } = usePlayer();

  const allSongs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", duration: 200, genre: "Pop" },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran", duration: 234, genre: "Pop" },
    { id: 3, title: "Rockstar", artist: "Post Malone", duration: 218, genre: "Hip-Hop" },
    { id: 4, title: "Bohemian Rhapsody", artist: "Queen", duration: 354, genre: "Rock" },
    { id: 5, title: "Despacito", artist: "Luis Fonsi", duration: 228, genre: "Latin" },
    { id: 6, title: "Someone Like You", artist: "Adele", duration: 285, genre: "Pop" },
    { id: 7, title: "Levitating", artist: "Dua Lipa", duration: 203, genre: "Pop" },
    { id: 8, title: "Closer", artist: "The Chainsmokers", duration: 244, genre: "Electronic" },
  ];

  const categories = [
    { id: 1, title: "Pop", color: "bg-pink-500" },
    { id: 2, title: "Hip-Hop", color: "bg-purple-500" },
    { id: 3, title: "Rock", color: "bg-red-500" },
    { id: 4, title: "Latin", color: "bg-orange-500" },
    { id: 5, title: "Electronic", color: "bg-blue-500" },
    { id: 6, title: "R&B", color: "bg-amber-500" },
    { id: 7, title: "Country", color: "bg-yellow-500" },
    { id: 8, title: "Jazz", color: "bg-teal-500" },
  ];

  const filteredSongs = searchQuery
    ? allSongs.filter(
        (song) =>
          song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handlePlaySong = (song: { id: number; title: string; artist: string; duration: number }) => {
    playTrack(song);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      <div className="p-4 md:p-8">
        <div className="relative max-w-md mb-8">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 bg-card border-0 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {searchQuery && filteredSongs.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Search Results</h2>
            <div className="space-y-2">
              {filteredSongs.map((song) => (
                <div
                  key={song.id}
                  className="flex items-center gap-3 md:gap-4 bg-card/50 rounded p-3 md:p-4 hover:bg-card transition-colors cursor-pointer group"
                  onClick={() => handlePlaySong(song)}
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate text-sm md:text-base">{song.title}</p>
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{song.artist}</p>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{song.genre}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}</p>
                </div>
              ))}
            </div>
          </div>
        ) : searchQuery ? (
          <div className="mb-8">
            <p className="text-muted-foreground text-center py-8">No results found for "{searchQuery}"</p>
          </div>
        ) : null}

        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Browse All</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.color} h-32 md:h-48 rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden`}
            >
              <h3 className="text-lg md:text-2xl font-bold text-white">{category.title}</h3>
              <div className="absolute bottom-0 right-0 w-20 md:w-28 h-20 md:h-28 bg-black/20 rounded-tl-full transform translate-x-6 md:translate-x-8 translate-y-6 md:translate-y-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
